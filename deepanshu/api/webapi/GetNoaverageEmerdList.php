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
$pageNo = max(1, isset($shonupost['pageNo']) ? intval($shonupost['pageNo']) : 1);
$pageSize = max(1, min(50, isset($shonupost['pageSize']) ? intval($shonupost['pageSize']) : 10));

if ($frontendTypeId == 30 || $frontendTypeId == 4 || $frontendTypeId == 0) {
    $intervalSec = 30;
    $typePrefix = "10005";
    $resTable = 'gellaluhogiondu_phalitansa30';
    $gameTag = 'WinGo_30S';
} elseif ($frontendTypeId == 2) {
    $intervalSec = 180;
    $typePrefix = "10002";
    $resTable = 'gellaluhogiondu_phalitansa_drei';
    $gameTag = 'WinGo_3M';
} elseif ($frontendTypeId == 3) {
    $intervalSec = 300;
    $typePrefix = "10003";
    $resTable = 'gellaluhogiondu_phalitansa_funf';
    $gameTag = 'WinGo_5M';
} else {
    $intervalSec = 60;
    $typePrefix = "10001";
    $resTable = 'gellaluhogiondu_phalitansa';
    $gameTag = 'WinGo_1M';
}

if ($resTable !== 'gellaluhogiondu_phalitansa') {
    @mysqli_query($conn, "CREATE TABLE IF NOT EXISTS `$resTable` LIKE `gellaluhogiondu_phalitansa`");
}

$nowUtc = time();
$dayStartUtc = strtotime(gmdate('Y-m-d 00:00:00', $nowUtc));
$secondsTodayUtc = $nowUtc - $dayStartUtc;
$currentSeq = intval(floor($secondsTodayUtc / $intervalSec)) + 1;
$datePrefix = gmdate('Ymd', $nowUtc);

// Helper function to resolve deterministic result
function get_draw_result($conn, $resTable, $gameTag, $issueNum, $drawTime) {
    $q = mysqli_query($conn, "SELECT phalitansa, banna, bele FROM `$resTable` WHERE kalaparichaya = '$issueNum' LIMIT 1");
    if ($q && mysqli_num_rows($q) > 0) {
        $row = mysqli_fetch_assoc($q);
        return [
            'number' => (int)$row['phalitansa'],
            'color'  => (string)$row['banna'],
            'premium'=> (string)$row['bele']
        ];
    }
    
    // Deterministic hash algorithm matching WinGo standards
    $hash = hexdec(substr(md5($gameTag . "_" . $issueNum), 0, 8));
    $num = $hash % 10;
    $prem = ($hash % 90000) + 10000;
    $banna = ($num == 0) ? 'red,violet' : (($num == 5) ? 'green,violet' : (in_array($num, [1,3,7,9]) ? 'green' : 'red'));
    
    @mysqli_query($conn, "INSERT IGNORE INTO `$resTable` (`kalaparichaya`, `bele`, `phalitansa`, `banna`, `phalitansadaprakara`, `dinankavannuracisi`) VALUES ('$issueNum', '$prem', '$num', '$banna', 'auto', '$drawTime')");
    
    return [
        'number' => $num,
        'color'  => $banna,
        'premium'=> (string)$prem
    ];
}

$list = [];
$startOffset = ($pageNo - 1) * $pageSize;

// Completed draws are all sequences strictly < current active sequence
for ($i = 0; $i < $pageSize; $i++) {
    $seq = $currentSeq - 1 - $startOffset - $i;
    if ($seq <= 0) break;
    
    $issueNum = $datePrefix . $typePrefix . sprintf('%04d', $seq);
    $drawTs = $dayStartUtc + ($seq * $intervalSec);
    $drawTimeStr = date('Y-m-d H:i:s', $drawTs + (5.5 * 3600)); // Display in IST
    
    $draw = get_draw_result($conn, $resTable, $gameTag, $issueNum, $drawTimeStr);
    $num = $draw['number'];
    $isBig = ($num >= 5);
    
    $list[] = [
        'issueNumber'  => $issueNum,
        'issue_number' => $issueNum,
        'number'       => (string)$num,
        'drawNumber'   => (string)$num,
        'colour'       => $draw['color'],
        'color'        => $draw['color'],
        'premium'      => $draw['premium'],
        'sum'          => (int)$num,
        'state'        => 1,
        'openTime'     => $drawTimeStr,
        'drawTime'     => $drawTimeStr,
        'typeId'       => $frontendTypeId,
        'isBig'        => $isBig,
        'bs'           => $isBig ? 'big' : 'small'
    ];
}

$totalCount = max(100, $currentSeq - 1);
$totalPage = max(1, ceil($totalCount / $pageSize));

echo json_encode([
    'code' => 0,
    'msg' => 'Succeed',
    'msgCode' => 0,
    'serviceNowTime' => date('Y-m-d H:i:s'),
    'data' => [
        'list'       => $list,
        'pageNo'     => $pageNo,
        'pageSize'   => $pageSize,
        'totalPage'  => $totalPage,
        'totalCount' => $totalCount
    ]
]);
exit;
?>