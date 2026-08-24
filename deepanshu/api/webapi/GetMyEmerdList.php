<?php
/**
 * WinGo GetMyEmerdList Endpoint - User Bet History & Settlement Status
 */

include_once "../../conn.php";
include_once "../../functions2.php";
include_once "WingoEngine.php";

header('Content-Type: application/json; charset=utf-8');
header('Strict-Transport-Security: max-age=31536000');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
header('Access-Control-Allow-Credentials: true');
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '*';
header('Access-Control-Allow-Origin: ' . $origin);
header('vary: Origin');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

date_default_timezone_set("Asia/Kolkata");
$nowTime = date("Y-m-d H:i:s");

$shonubody = file_get_contents("php://input");
$shonupost = json_decode($shonubody, true);
if (empty($shonupost)) {
    $shonupost = $_POST;
}

$typeId = isset($shonupost['typeId']) ? (int)$shonupost['typeId'] : (isset($_GET['typeId']) ? (int)$_GET['typeId'] : 1);
$pageNo = isset($shonupost['pageNo']) ? max(1, (int)$shonupost['pageNo']) : (isset($_GET['pageNo']) ? max(1, (int)$_GET['pageNo']) : 1);
$pageSize = isset($shonupost['pageSize']) ? max(1, min(100, (int)$shonupost['pageSize'])) : (isset($_GET['pageSize']) ? max(1, min(100, (int)$_GET['pageSize'])) : 10);

// Authenticate user via JWT
$author = get_auth_token();
$is_jwt_valid = is_jwt_valid($author);
$data_auth = json_decode($is_jwt_valid, true);

if (!$data_auth || ($data_auth['status'] ?? '') !== 'Success' || empty($data_auth['payload']['id'])) {
    http_response_code(401);
    echo json_encode(['code' => 4, 'msg' => 'No operation permission', 'msgCode' => 2]);
    exit;
}

$userId = (int)$data_auth['payload']['id'];

// Run on-demand settlement
WingoEngine::autoSettleAndEnsureActive($conn, $typeId);
$cfg = WingoEngine::getConfig($typeId);
$betTable = $cfg['betTable'];

$offset = ($pageNo - 1) * $pageSize;
$list = [];
$totalCount = 0;

if ($conn) {
    $betQuery = mysqli_query($conn, "SELECT parichaya, kalaparichaya, ojana, menge, wettanzahl, ketebida, phalaphala, sesabida, ergebnis, zufallig, tiarikala 
                                     FROM `$betTable` 
                                     WHERE `byabaharkarta` = '$userId' 
                                     ORDER BY `parichaya` DESC 
                                     LIMIT $pageSize OFFSET $offset");

    if ($betQuery && mysqli_num_rows($betQuery) > 0) {
        $i = 0;
        while ($row = mysqli_fetch_assoc($betQuery)) {
            $rawOj = (string)$row['ojana'];
            switch ($rawOj) {
                case '10':
                    $selectType = 'red';
                    break;
                case '11':
                    $selectType = 'green';
                    break;
                case '12':
                    $selectType = 'violet';
                    break;
                case '13':
                    $selectType = 'big';
                    break;
                case '14':
                    $selectType = 'small';
                    break;
                default:
                    $selectType = $rawOj;
            }

            $amount = (float)$row['menge'];
            $betCount = (int)$row['wettanzahl'];
            $totalMotta = (float)$row['ketebida'];
            $fee = round($totalMotta * 0.02, 2);
            $realAmount = $totalMotta - $fee;

            if ($row['ergebnis'] === null || $row['ergebnis'] === '') {
                // Pending draw
                $list[] = [
                    'orderNumber' => $i,
                    'issueNumber' => (string)$row['kalaparichaya'],
                    'amount'      => $amount,
                    'betCount'    => $betCount,
                    'realAmount'  => $realAmount,
                    'fee'         => $fee,
                    'selectType'  => $selectType,
                    'state'       => 2,
                    'addTime'     => $row['tiarikala'],
                ];
            } else {
                // Settled
                $isWin = ($row['phalaphala'] === 'gagner');
                $list[] = [
                    'orderNumber'  => $i,
                    'issueNumber'  => (string)$row['kalaparichaya'],
                    'amount'       => $amount,
                    'betCount'     => $betCount,
                    'realAmount'   => $realAmount,
                    'fee'          => $fee,
                    'number'       => (int)$row['ergebnis'],
                    'selectType'   => $selectType,
                    'state'        => $isWin ? 1 : 0,
                    'profitAmount' => $isWin ? (float)$row['sesabida'] : 0.0,
                    'premium'      => !empty($row['zufallig']) ? (string)$row['zufallig'] : (string)(rand(1000, 9999) * 10 + (int)$row['ergebnis']),
                    'gameType'     => $typeId,
                    'addTime'      => $row['tiarikala'],
                ];
            }
            $i++;
        }
    }

    $countRes = mysqli_query($conn, "SELECT COUNT(*) as total FROM `$betTable` WHERE `byabaharkarta` = '$userId'");
    if ($countRes && mysqli_num_rows($countRes) > 0) {
        $totalCount = (int)mysqli_fetch_assoc($countRes)['total'];
    }
}

$response = [
    'code' => 0,
    'msg' => 'Succeed',
    'msgCode' => 0,
    'serviceNowTime' => $nowTime,
    'data' => [
        'list'       => !empty($list) ? $list : null,
        'pageNo'     => $pageNo,
        'totalPage'  => max(1, (int)ceil($totalCount / $pageSize)),
        'totalCount' => $totalCount,
    ]
];

http_response_code(200);
echo json_encode($response, JSON_UNESCAPED_UNICODE);
?>