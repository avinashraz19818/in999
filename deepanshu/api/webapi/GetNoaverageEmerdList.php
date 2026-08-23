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

$startOffset = ($pageNo - 1) * $pageSize;
$list = [];

// 1. Fetch real official results from DB table
$res = mysqli_query($conn, "SELECT kalaparichaya, phalitansa, banna, bele, dinankavannuracisi FROM `$resTable` ORDER BY kalaparichaya DESC LIMIT $pageSize OFFSET $startOffset");
if ($res && mysqli_num_rows($res) > 0) {
    while ($row = mysqli_fetch_assoc($res)) {
        $num = (int)$row['phalitansa'];
        $isBig = ($num >= 5);
        $list[] = [
            'issueNumber'  => (string)$row['kalaparichaya'],
            'issue_number' => (string)$row['kalaparichaya'],
            'number'       => (string)$num,
            'drawNumber'   => (string)$num,
            'colour'       => (string)$row['banna'],
            'color'        => (string)$row['banna'],
            'premium'      => (string)$row['bele'],
            'sum'          => (int)$num,
            'state'        => 1,
            'openTime'     => (string)$row['dinankavannuracisi'],
            'drawTime'     => (string)$row['dinankavannuracisi'],
            'typeId'       => $frontendTypeId,
            'isBig'        => $isBig,
            'bs'           => $isBig ? 'big' : 'small'
        ];
    }
}

// 2. Fallback to UTC sequence generation if table is empty
if (empty($list)) {
    $nowUtc = time();
    $dayStartUtc = strtotime(gmdate('Y-m-d 00:00:00', $nowUtc));
    $secondsTodayUtc = $nowUtc - $dayStartUtc;
    $currentSeq = intval(floor($secondsTodayUtc / $intervalSec)) + 1;
    $datePrefix = gmdate('Ymd', $nowUtc);

    for ($i = 0; $i < $pageSize; $i++) {
        $seq = $currentSeq - 1 - $startOffset - $i;
        if ($seq <= 0) break;
        
        $issueNum = $datePrefix . $typePrefix . sprintf('%04d', $seq);
        $drawTs = $dayStartUtc + ($seq * $intervalSec);
        $drawTimeStr = date('Y-m-d H:i:s', $drawTs + (5.5 * 3600));
        
        $hash = hexdec(substr(md5($gameTag . "_" . $issueNum), 0, 8));
        $num = $hash % 10;
        $prem = ($hash % 90000) + 10000;
        $banna = ($num == 0) ? 'red,violet' : (($num == 5) ? 'green,violet' : (in_array($num, [1,3,7,9]) ? 'green' : 'red'));
        $isBig = ($num >= 5);
        
        $list[] = [
            'issueNumber'  => $issueNum,
            'issue_number' => $issueNum,
            'number'       => (string)$num,
            'drawNumber'   => (string)$num,
            'colour'       => $banna,
            'color'        => $banna,
            'premium'      => (string)$prem,
            'sum'          => (int)$num,
            'state'        => 1,
            'openTime'     => $drawTimeStr,
            'drawTime'     => $drawTimeStr,
            'typeId'       => $frontendTypeId,
            'isBig'        => $isBig,
            'bs'           => $isBig ? 'big' : 'small'
        ];
    }
}

$countRes = mysqli_query($conn, "SELECT COUNT(*) as total FROM `$resTable`");
$countRow = $countRes ? mysqli_fetch_assoc($countRes) : null;
$totalCount = max(100, intval($countRow['total'] ?? 100));
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