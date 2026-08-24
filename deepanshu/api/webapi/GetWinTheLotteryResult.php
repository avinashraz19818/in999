<?php
/**
 * WinGo GetWinTheLotteryResult Endpoint - Draw Popup & User Win/Loss Query
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

$issueNumber = '';
if (isset($shonupost['issueNumber'])) {
    $issueNumber = is_array($shonupost['issueNumber']) ? ($shonupost['issueNumber'][0] ?? '') : $shonupost['issueNumber'];
} elseif (isset($_GET['issueNumber'])) {
    $issueNumber = is_array($_GET['issueNumber']) ? ($_GET['issueNumber'][0] ?? '') : $_GET['issueNumber'];
}

$issueNumber = trim((string)$issueNumber);

if (empty($issueNumber)) {
    http_response_code(200);
    echo json_encode(['code' => 7, 'msg' => 'Param is Invalid', 'msgCode' => 6, 'serviceNowTime' => $nowTime]);
    exit;
}

// Authenticate user via JWT
$author = get_auth_token();
$is_jwt_valid = is_jwt_valid($author);
$data_auth = json_decode($is_jwt_valid, true);

$userId = (!empty($data_auth['payload']['id'])) ? (int)$data_auth['payload']['id'] : 0;

// Resolve typeId from issue number pattern
$gameCodeChar = strlen($issueNumber) >= 13 ? $issueNumber[12] : '1';
switch ($gameCodeChar) {
    case '1':
        $typeId = 1;
        break;
    case '2':
        $typeId = 2;
        break;
    case '3':
        $typeId = 3;
        break;
    case '5':
        $typeId = 4;
        break;
    default:
        $typeId = 1;
}

// Settle active/previous if pending
WingoEngine::autoSettleAndEnsureActive($conn, $typeId);
$cfg = WingoEngine::getConfig($typeId);
$betTable = $cfg['betTable'];
$resultTable = $cfg['resultTable'];

switch ($typeId) {
    case 1:
        $typeName = '1Min';
        break;
    case 2:
        $typeName = '3Min';
        break;
    case 3:
        $typeName = '5Min';
        break;
    default:
        $typeName = '30S';
}

$escapedIssue = mysqli_real_escape_string($conn, $issueNumber);
$data = [];

// 1. Check user's bet on this issue
$betQuery = ($conn && $userId > 0) ? mysqli_query($conn, "SELECT phalaphala, sesabida, ergebnis, zufallig, ojana 
                                 FROM `$betTable` 
                                 WHERE `kalaparichaya` = '$escapedIssue' AND `byabaharkarta` = '$userId' 
                                 ORDER BY `parichaya` DESC LIMIT 1") : false;

if ($betQuery && mysqli_num_rows($betQuery) > 0) {
    $bet = mysqli_fetch_assoc($betQuery);
    $drawNum = isset($bet['ergebnis']) ? (int)$bet['ergebnis'] : 0;
    $color = WingoEngine::getColorForNumber($drawNum);
    $winAmount = ($bet['phalaphala'] === 'gagner') ? (float)$bet['sesabida'] : 0.0;
    $state = ($bet['phalaphala'] === 'gagner') ? 1 : 0;

    $data[0] = [
        'issueNumber' => $issueNumber,
        'number'      => (string)$drawNum,
        'colour'      => $color,
        'winAmount'   => $winAmount,
        'typeName'    => $typeName,
        'state'       => $state,
    ];
} else {
    // 2. No bet placed by user: check result table directly
    $resQuery = ($conn) ? mysqli_query($conn, "SELECT phalitansa, banna, bele 
                                     FROM `$resultTable` 
                                     WHERE `kalaparichaya` = '$escapedIssue' LIMIT 1") : false;
    if ($resQuery && mysqli_num_rows($resQuery) > 0) {
        $rRow = mysqli_fetch_assoc($resQuery);
        $drawNum = (int)$rRow['phalitansa'];
        $color = !empty($rRow['banna']) ? $rRow['banna'] : WingoEngine::getColorForNumber($drawNum);

        $data[0] = [
            'issueNumber' => $issueNumber,
            'number'      => (string)$drawNum,
            'colour'      => $color,
            'winAmount'   => 0,
            'typeName'    => $typeName,
            'state'       => -1,
        ];
    } else {
        $hash = md5($typeId . '_' . $issueNumber);
        $drawNum = hexdec(substr($hash, 0, 4)) % 10;
        $color = WingoEngine::getColorForNumber($drawNum);

        $data[0] = [
            'issueNumber' => $issueNumber,
            'number'      => (string)$drawNum,
            'colour'      => $color,
            'winAmount'   => 0,
            'typeName'    => $typeName,
            'state'       => -1,
        ];
    }
}

http_response_code(200);
echo json_encode([
    'code' => 0,
    'msg' => 'Succeed',
    'msgCode' => 0,
    'data' => $data,
    'serviceNowTime' => $nowTime
], JSON_UNESCAPED_UNICODE);
?>