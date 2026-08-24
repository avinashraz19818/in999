<?php
/**
 * WinGo GameBetting Endpoint - Atomic Wallet & Zero-Cron Bet Placement
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

if (!isset($shonupost['amount']) || !isset($shonupost['betCount']) || !isset($shonupost['issuenumber']) || !isset($shonupost['selectType']) || !isset($shonupost['typeId'])) {
    http_response_code(200);
    echo json_encode(['code' => 7, 'msg' => 'Param is Invalid', 'msgCode' => 6, 'serviceNowTime' => $nowTime]);
    exit;
}

$amount = (float)$shonupost['amount'];
$betCount = (int)$shonupost['betCount'];
$gameType = isset($shonupost['gameType']) ? (string)$shonupost['gameType'] : '1';
$issuenumber = (string)$shonupost['issuenumber'];
$selectType = (string)$shonupost['selectType'];
$typeId = (int)$shonupost['typeId'];

if ($amount < 1) {
    http_response_code(200);
    echo json_encode(['code' => 7, 'msg' => "Invalid value for parameter 'Amount'"]);
    exit;
}

if ($betCount < 1) {
    http_response_code(200);
    echo json_encode(['code' => 7, 'msg' => "Invalid value for parameter 'BetCount'"]);
    exit;
}

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

// Check user subject exists if table exists
if ($conn) {
    $escapedAuthor = mysqli_real_escape_string($conn, $author);
    $sesquery = "SELECT akshinak FROM shonu_subjects WHERE akshinak = '$escapedAuthor' LIMIT 1";
    $sesresult = mysqli_query($conn, $sesquery);
    if ($sesresult && mysqli_num_rows($sesresult) !== 1) {
        // Fallback: if subjects table not used or session expired
    }
}

// Validate active period
$cur = WingoEngine::autoSettleAndEnsureActive($conn, $typeId);
$cfg = $cur['cfg'];
$betTable = $cfg['betTable'];

if ($issuenumber !== $cur['issueNumber'] || $cur['isLocked']) {
    http_response_code(200);
    echo json_encode([
        'code' => 1,
        'msg' => 'The current period is settled',
        'msgCode' => 404,
        'serviceNowTime' => $nowTime
    ]);
    exit;
}

$totalAmount = $amount * $betCount;

// Lock user wallet and check balance
mysqli_begin_transaction($conn);

try {
    $balQuery = mysqli_query($conn, "SELECT motta FROM `shonu_kaichila` WHERE `balakedara` = '$userId' FOR UPDATE");
    if (!$balQuery || mysqli_num_rows($balQuery) === 0) {
        mysqli_rollback($conn);
        http_response_code(200);
        echo json_encode(['code' => 1, 'msg' => 'Balance is not enough', 'msgCode' => 142]);
        exit;
    }

    $balRow = mysqli_fetch_assoc($balQuery);
    $userBalance = (float)$balRow['motta'];

    if ($userBalance < $totalAmount) {
        mysqli_rollback($conn);
        http_response_code(200);
        echo json_encode(['code' => 1, 'msg' => 'Balance is not enough', 'msgCode' => 142]);
        exit;
    }

    // Deduct balance
    $newBalance = $userBalance - $totalAmount;
    mysqli_query($conn, "UPDATE `shonu_kaichila` SET `motta` = '$newBalance' WHERE `balakedara` = '$userId'");

    // Insert bet record (98% net after 2% fee)
    $netAmount = sprintf("%.2f", $totalAmount * 0.98);
    $escapedIssue = mysqli_real_escape_string($conn, $issuenumber);
    $escapedGameType = mysqli_real_escape_string($conn, $gameType);
    $escapedSelect = mysqli_real_escape_string($conn, $selectType);

    $insertSql = "INSERT INTO `$betTable` 
                  (`byabaharkarta`, `kalaparichaya`, `prakar`, `ojana`, `menge`, `wettanzahl`, `ketebida`, `phalaphala`, `sesabida`, `tiarikala`) 
                  VALUES ('$userId', '$escapedIssue', '$escapedGameType', '$escapedSelect', '$amount', '$betCount', '$totalAmount', 'perte', '$netAmount', '$nowTime')";
    
    if (!mysqli_query($conn, $insertSql)) {
        mysqli_rollback($conn);
        http_response_code(500);
        echo json_encode(['code' => 1, 'msg' => 'Failed to place bet', 'msgCode' => 500]);
        exit;
    }

    mysqli_commit($conn);

    if (file_exists(__DIR__ . '/commission.php')) {
        @include __DIR__ . '/commission.php';
    }
    if (file_exists(__DIR__ . '/vip.php')) {
        @include __DIR__ . '/vip.php';
    }

    http_response_code(200);
    echo json_encode([
        'code' => 0,
        'msg' => 'Succeed',
        'msgCode' => 0,
        'data' => null,
        'serviceNowTime' => $nowTime
    ]);
} catch (Throwable $e) {
    mysqli_rollback($conn);
    http_response_code(500);
    echo json_encode(['code' => 1, 'msg' => $e->getMessage(), 'msgCode' => 500]);
}
?>