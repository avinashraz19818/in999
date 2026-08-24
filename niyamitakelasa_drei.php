<?php
/**
 * WinGo 3-Min Auto Trigger (Zero-Cron Compatible)
 */
include_once __DIR__ . "/deepanshu/conn.php";
include_once __DIR__ . "/deepanshu/api/webapi/WingoEngine.php";

header('Content-Type: application/json');
$cur = WingoEngine::autoSettleAndEnsureActive($conn, 2);
echo json_encode(['status' => 'success', 'game' => '3Min', 'issue' => $cur['issueNumber']]);
?>