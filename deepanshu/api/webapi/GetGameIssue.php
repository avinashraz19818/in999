<?php 
include "../../conn.php";
include "../../functions2.php";

header('Content-Type: application/json; charset=utf-8');
header('Strict-Transport-Security: max-age=31536000');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
header('Access-Control-Allow-Credentials: true');
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '*';
header('Access-Control-Allow-Origin: ' . $origin);

date_default_timezone_set("Asia/Kolkata");
$shonubody = file_get_contents("php://input");
$shonupost = json_decode($shonubody, true);

$frontendTypeId = isset($shonupost['typeId']) ? intval($shonupost['typeId']) : (isset($_GET['typeId']) ? intval($_GET['typeId']) : 1);

// Interval config
if ($frontendTypeId == 30 || $frontendTypeId == 4 || $frontendTypeId == 0) {
    $intervalSec = 30;
    $typePrefix = "10005";
    $intervalM = 0.5;
    $sonofgod = 'gelluonduhogu30';
} elseif ($frontendTypeId == 2) { // 3Min
    $intervalSec = 180;
    $typePrefix = "10002";
    $intervalM = 3;
    $sonofgod = 'gelluonduhogu_drei';
} elseif ($frontendTypeId == 3) { // 5Min
    $intervalSec = 300;
    $typePrefix = "10003";
    $intervalM = 5;
    $sonofgod = 'gelluonduhogu_funf';
} else { // 1Min (default)
    $intervalSec = 60;
    $typePrefix = "10001";
    $intervalM = 1;
    $sonofgod = 'gelluonduhogu';
}

$now = time();
$dayStart = strtotime(date('Y-m-d 00:00:00', $now));
$secondsToday = $now - $dayStart;
$seqToday = intval(floor($secondsToday / $intervalSec)) + 1;

$currentStartTs = $dayStart + (($seqToday - 1) * $intervalSec);
$currentEndTs = $currentStartTs + $intervalSec;
$secondsLeft = max(0, $currentEndTs - $now);

$datePrefix = date('Ymd', $now);
$activeIssue = $datePrefix . $typePrefix . sprintf('%04d', $seqToday);
$nextIssue = $datePrefix . $typePrefix . sprintf('%04d', $seqToday + 1);

$startTimeStr = date('Y-m-d H:i:s', $currentStartTs);
$endTimeStr = date('Y-m-d H:i:s', $currentEndTs);
$serverTimeStr = date('Y-m-d H:i:s', $now);

// Auto register in local DB
if ($sonofgod !== 'gelluonduhogu') {
    @mysqli_query($conn, "CREATE TABLE IF NOT EXISTS `$sonofgod` LIKE `gelluonduhogu`");
}
@mysqli_query($conn, "INSERT IGNORE INTO `$sonofgod` (`atadaaidi`, `dinankavannuracisi`) VALUES ('$activeIssue', '$startTimeStr')");

echo json_encode([
    'code' => 0,
    'msg' => 'Succeed',
    'msgCode' => 0,
    'serviceNowTime' => $serverTimeStr,
    'data' => [
        'issueNumber'     => $activeIssue,
        'nextIssueNumber' => $nextIssue,
        'startTime'       => $startTimeStr,
        'endTime'         => $endTimeStr,
        'openTime'        => $endTimeStr,
        'serviceTime'     => $serverTimeStr,
        'seconds'         => $secondsLeft,
        'secondsLeft'     => $secondsLeft,
        'interval'        => $intervalSec,
        'intervalM'       => $intervalM,
        'isLocked'        => ($secondsLeft <= 5),
        'typeId'          => $frontendTypeId,
        'serverTime'      => $serverTimeStr,
        'serviceNowTime'  => $serverTimeStr,
        'serverTimestamp' => $now
    ]
]);
exit;
?>