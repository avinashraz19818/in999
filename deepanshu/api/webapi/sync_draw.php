<?php
include "../../conn.php";

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

$body = file_get_contents("php://input");
$post = json_decode($body, true);

if (!empty($post['gameCode']) && !empty($post['list']) && is_array($post['list'])) {
    $gameCode = $post['gameCode'];
    
    if ($gameCode === 'WinGo_30S') {
        $tbl = 'gellaluhogiondu_phalitansa30';
    } elseif ($gameCode === 'WinGo_3M') {
        $tbl = 'gellaluhogiondu_phalitansa_drei';
    } elseif ($gameCode === 'WinGo_5M') {
        $tbl = 'gellaluhogiondu_phalitansa_funf';
    } else {
        $tbl = 'gellaluhogiondu_phalitansa';
    }
    
    if ($tbl !== 'gellaluhogiondu_phalitansa') {
        @mysqli_query($conn, "CREATE TABLE IF NOT EXISTS `$tbl` LIKE `gellaluhogiondu_phalitansa`");
    }
    
    foreach ($post['list'] as $item) {
        $issue = mysqli_real_escape_string($conn, (string)$item['issueNumber']);
        $num = intval($item['number']);
        $color = mysqli_real_escape_string($conn, (string)$item['color']);
        $prem = mysqli_real_escape_string($conn, (string)($item['premium'] ?? $num));
        $now = date('Y-m-d H:i:s');
        
        @mysqli_query($conn, "INSERT INTO `$tbl` (`kalaparichaya`, `bele`, `phalitansa`, `banna`, `phalitansadaprakara`, `dinankavannuracisi`) 
            VALUES ('$issue', '$prem', '$num', '$color', 'official', '$now')
            ON DUPLICATE KEY UPDATE `bele`='$prem', `phalitansa`='$num', `banna`='$color'");
    }
    
    echo json_encode(['status' => 'success', 'saved' => count($post['list'])]);
    exit;
}

echo json_encode(['status' => 'ignored']);
?>