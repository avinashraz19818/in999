<?php
/**
 * WinGo 30s Auto Trigger (Zero-Cron Compatible)
 */
include_once __DIR__ . "/deepanshu/conn.php";
include_once __DIR__ . "/deepanshu/api/webapi/WingoEngine.php";

header('Content-Type: application/json');
$cur = WingoEngine::autoSettleAndEnsureActive($conn, 4);
echo json_encode(['status' => 'success', 'game' => '30s', 'issue' => $cur['issueNumber']]);
?>