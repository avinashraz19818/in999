<?php
/**
 * WinGo GetGameIssue Endpoint - Zero-Cron Direct Engine
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

// Run on-demand settlement and ensure active period
$cur = WingoEngine::autoSettleAndEnsureActive($conn, $typeId);

$response = [
    'code' => 0,
    'msg' => 'Succeed',
    'msgCode' => 0,
    'serviceNowTime' => $nowTime,
    'data' => [
        'issueNumber' => (string)$cur['issueNumber'],
        'startTime'   => (string)$cur['startTime'],
        'endTime'     => (string)$cur['endTime'],
        'serviceTime' => (string)$cur['serviceTime'],
        'intervalM'   => $cur['intervalM'],
    ]
];

http_response_code(200);
echo json_encode($response, JSON_UNESCAPED_UNICODE);
?>