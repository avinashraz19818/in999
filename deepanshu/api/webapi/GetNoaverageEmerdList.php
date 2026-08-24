<?php
/**
 * WinGo GetNoaverageEmerdList Endpoint - Zero-Cron Result History
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

$typeId = isset($shonupost['typeId']) ? (int)$shonupost['typeId'] : (isset($_GET['typeId']) ? (int)$_GET['typeId'] : 1);
$pageNo = isset($shonupost['pageNo']) ? max(1, (int)$shonupost['pageNo']) : (isset($_GET['pageNo']) ? max(1, (int)$_GET['pageNo']) : 1);
$pageSize = isset($shonupost['pageSize']) ? max(1, min(100, (int)$shonupost['pageSize'])) : (isset($_GET['pageSize']) ? max(1, min(100, (int)$_GET['pageSize'])) : 10);

// Run on-demand settlement to guarantee latest completed draw is recorded
$cur = WingoEngine::autoSettleAndEnsureActive($conn, $typeId);
$cfg = $cur['cfg'];
$resultTable = $cfg['resultTable'];
$curIssue = $cur['issueNumber'];

$offset = ($pageNo - 1) * $pageSize;
$list = [];
$totalCount = 0;

if ($conn) {
    // Only return completed past issues (kalaparichaya < curIssue)
    $query = "SELECT kalaparichaya, phalitansa, banna, bele 
              FROM `$resultTable` 
              WHERE kalaparichaya < '$curIssue' 
              ORDER BY shonu DESC 
              LIMIT $pageSize OFFSET $offset";

    $res = mysqli_query($conn, $query);
    if ($res && mysqli_num_rows($res) > 0) {
        while ($row = mysqli_fetch_assoc($res)) {
            $num = (int)$row['phalitansa'];
            $color = !empty($row['banna']) ? $row['banna'] : WingoEngine::getColorForNumber($num);
            $premium = !empty($row['bele']) ? (string)$row['bele'] : (string)(rand(1000, 9999) * 10 + $num);

            $list[] = [
                'issueNumber' => (string)$row['kalaparichaya'],
                'number'      => $num,
                'colour'      => $color,
                'premium'     => $premium,
            ];
        }
    }

    $countRes = mysqli_query($conn, "SELECT COUNT(*) as total FROM `$resultTable` WHERE kalaparichaya < '$curIssue'");
    if ($countRes && mysqli_num_rows($countRes) > 0) {
        $countRow = mysqli_fetch_assoc($countRes);
        $totalCount = (int)$countRow['total'];
    }
}

// Fallback fill if database has fewer historical rows
if (count($list) < $pageSize && $pageNo === 1) {
    $now = time();
    $utcMidnight = strtotime(gmdate('Y-m-d 00:00:00', $now));
    $secondsToday = $now - $utcMidnight;
    $dateStr = gmdate('Ymd', $now);
    $interval = $cfg['interval'];
    $curSeq = intval($secondsToday / $interval) + 1;

    $existingIssues = array_column($list, 'issueNumber');

    for ($i = 1; $i <= $pageSize && count($list) < $pageSize; $i++) {
        $pastSeq = $curSeq - $i;
        if ($pastSeq >= 1) {
            $pastIssue = $dateStr . $cfg['gameCode'] . sprintf("%04d", $pastSeq);
        } else {
            $prevDay = gmdate('Ymd', $now - 86400);
            $maxSeq = intval(86400 / $interval);
            $pastIssue = $prevDay . $cfg['gameCode'] . sprintf("%04d", $maxSeq + $pastSeq);
        }

        if (!in_array($pastIssue, $existingIssues, true)) {
            $hash = md5($typeId . '_' . $pastIssue);
            $fallbackNum = hexdec(substr($hash, 0, 4)) % 10;
            $fallbackColor = WingoEngine::getColorForNumber($fallbackNum);
            $fallbackPremium = (string)(rand(1000, 9999) * 10 + $fallbackNum);

            $list[] = [
                'issueNumber' => $pastIssue,
                'number'      => $fallbackNum,
                'colour'      => $fallbackColor,
                'premium'     => $fallbackPremium,
            ];
        }
    }
    $totalCount = max($totalCount, count($list));
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