<?php
/**
 * WinGo Draw Result Ingestion & Sync Endpoint
 * Accepts draw results from client-side browser sync or VPS API relay.
 */

include_once "../../conn.php";
include_once "../../functions2.php";
include_once "WingoEngine.php";

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

date_default_timezone_set("Asia/Kolkata");
$nowTime = date("Y-m-d H:i:s");

$raw = file_get_contents("php://input");
$post = json_decode($raw, true);

$typeId = isset($post['typeId']) ? (int)$post['typeId'] : (isset($_GET['typeId']) ? (int)$_GET['typeId'] : 1);
$list = $post['list'] ?? ($post['data']['list'] ?? []);

// Single draw fallback
if (empty($list) && isset($post['issueNumber']) && isset($post['number'])) {
    $list = [$post];
}

$synced = 0;
if (!empty($list) && is_array($list)) {
    foreach ($list as $item) {
        $issueNumber = trim((string)($item['issueNumber'] ?? $item['issue_number'] ?? ''));
        if (empty($issueNumber)) continue;

        $number = isset($item['number']) ? (int)$item['number'] : (isset($item['drawNumber']) ? (int)$item['drawNumber'] : 0);
        $color = !empty($item['colour']) ? (string)$item['colour'] : (!empty($item['color']) ? (string)$item['color'] : null);
        $premium = !empty($item['premium']) ? (string)$item['premium'] : null;

        if (WingoEngine::settleDrawResult($conn, $typeId, $issueNumber, $number, $premium, $color)) {
            $synced++;
        }
    }
}

// Always ensure active period is up to date
$cur = WingoEngine::autoSettleAndEnsureActive($conn, $typeId);

echo json_encode([
    'code' => 0,
    'msg' => "Synced {$synced} draws successfully",
    'msgCode' => 0,
    'synced_count' => $synced,
    'current_issue' => $cur['issueNumber'],
    'serviceNowTime' => $nowTime
], JSON_UNESCAPED_UNICODE);
?>