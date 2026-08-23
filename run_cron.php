<?php
// Direct API Engine Active - Cron execution disabled to prevent collision
header('Content-Type: application/json');
echo json_encode([
    'status' => 'success',
    'mode' => 'direct_engine',
    'message' => 'Direct realtime API engine is active. Background crons are not needed.',
    'time' => date('Y-m-d H:i:s')
]);
?>