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
    $resTable = 'gellaluhogiondu_phalitansa30';
} elseif ($frontendTypeId == 2) { // 3Min
    $intervalSec = 180;
    $typePrefix = "10002";
    $intervalM = 3;
    $sonofgod = 'gelluonduhogu_drei';
    $resTable = 'gellaluhogiondu_phalitansa_drei';
} elseif ($frontendTypeId == 3) { // 5Min
    $intervalSec = 300;
    $typePrefix = "10003";
    $intervalM = 5;
    $sonofgod = 'gelluonduhogu_funf';
    $resTable = 'gellaluhogiondu_phalitansa_funf';
} else { // 1Min (default)
    $intervalSec = 60;
    $typePrefix = "10001";
    $intervalM = 1;
    $sonofgod = 'gelluonduhogu';
    $resTable = 'gellaluhogiondu_phalitansa';
}

$nowUtc = time();
$dayStartUtc = strtotime(gmdate('Y-m-d 00:00:00', $nowUtc));
$secondsTodayUtc = $nowUtc - $dayStartUtc;
$seqToday = intval(floor($secondsTodayUtc / $intervalSec)) + 1;

$currentStartTs = $dayStartUtc + (($seqToday - 1) * $intervalSec);
$currentEndTs = $currentStartTs + $intervalSec;
$secondsLeft = max(0, $currentEndTs - $nowUtc);

$datePrefix = gmdate('Ymd', $nowUtc);
$activeIssue = $datePrefix . $typePrefix . sprintf('%04d', $seqToday);
$nextIssue = $datePrefix . $typePrefix . sprintf('%04d', $seqToday + 1);

// If latest official draw is recorded, match exact sequence
$latestQ = mysqli_query($conn, "SELECT kalaparichaya FROM `$resTable` ORDER BY kalaparichaya DESC LIMIT 1");
if ($latestQ && mysqli_num_rows($latestQ) > 0) {
    $latestRow = mysqli_fetch_assoc($latestQ);
    $lastIssue = (string)$latestRow['kalaparichaya'];
    if (strlen($lastIssue) >= 10 && str_starts_with($lastIssue, $datePrefix)) {
        $prefix = substr($lastIssue, 0, -4);
        $seq = intval(substr($lastIssue, -4)) + 1;
        $activeIssue = $prefix . sprintf('%04d', $seq);
        $nextIssue = $prefix . sprintf('%04d', $seq + 1);
    }
}

$nowIst = time();
$startTimeStr = date('Y-m-d H:i:s', $nowIst - ($nowUtc - $currentStartTs));
$endTimeStr = date('Y-m-d H:i:s', $nowIst + $secondsLeft);
$serverTimeStr = date('Y-m-d H:i:s', $nowIst);

// Auto register active issue in local DB
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
        'serverTimestamp' => $nowIst
    ]
]);
exit;
?>