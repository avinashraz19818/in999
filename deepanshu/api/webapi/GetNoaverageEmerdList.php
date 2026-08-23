<?php 
include "../../conn.php";
include "../../functions2.php";

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
header('Access-Control-Allow-Credentials: true');
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '*';
header('Access-Control-Allow-Origin: ' . $origin);

date_default_timezone_set("Asia/Kolkata");
$shonubody = file_get_contents("php://input");
$shonupost = json_decode($shonubody, true);

function mapTypeId($frontendTypeId) {
    $map = [
        30 => 1,  // WinGo 30s
        4  => 1,  // WinGo 30s tab
        1  => 2,  // WinGo 1Min
        2  => 3,  // WinGo 3Min
        3  => 4,  // WinGo 5Min
        5  => 5,  // WinGo 10Min
    ];
    return $map[$frontendTypeId] ?? $frontendTypeId;
}

function callExternalApi($endpoint, $payload) {
    $apiBaseUrl = "https://api.devlopedwithzayro.site/api/webapi";
    $ch = curl_init($apiBaseUrl . $endpoint);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
    curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type: application/json"]);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    if ($httpCode == 200 && $response) {
        return json_decode($response, true);
    }
    return null;
}

$frontendTypeId = isset($shonupost['typeId']) ? intval($shonupost['typeId']) : (isset($_GET['typeId']) ? intval($_GET['typeId']) : 1);
$typeId = mapTypeId($frontendTypeId);
$pageNo = isset($shonupost['pageNo']) ? intval($shonupost['pageNo']) : 1;
$pageSize = isset($shonupost['pageSize']) ? intval($shonupost['pageSize']) : 10;

$externalData = callExternalApi("/GetNoaverageEmerdList", [
    "typeId" => $typeId,
    "pageSize" => $pageSize
]);

if ($externalData && isset($externalData['data']['list']) && !empty($externalData['data']['list'])) {
    $list = $externalData['data']['list'];
    foreach ($list as &$item) {
        $item['typeId'] = $frontendTypeId;
    }
    echo json_encode([
        'code' => 0,
        'msg' => 'Succeed',
        'msgCode' => 0,
        'serviceNowTime' => date('Y-m-d H:i:s'),
        'data' => [
            'list' => $list,
            'pageNo' => $pageNo,
            'pageSize' => $pageSize,
            'totalPage' => ceil(($externalData['data']['totalCount'] ?? 100) / $pageSize),
            'totalCount' => $externalData['data']['totalCount'] ?? 100
        ]
    ]);
    exit;
} else {
    // Local DB Fallback
    $tbl = ($frontendTypeId == 30 || $frontendTypeId == 4) ? 'gellaluhogiondu_phalitansa30' : ($frontendTypeId == 1 ? 'gellaluhogiondu_phalitansa' : ($frontendTypeId == 2 ? 'gellaluhogiondu_phalitansa_drei' : 'gellaluhogiondu_phalitansa_funf'));
    $offset = ($pageNo - 1) * $pageSize;
    $res = mysqli_query($conn, "SELECT kalaparichaya, phalitansa, banna, bele FROM $tbl ORDER BY shonu DESC LIMIT $pageSize OFFSET $offset");
    $list = [];
    if ($res) {
        while ($row = mysqli_fetch_assoc($res)) {
            $list[] = [
                'issueNumber' => $row['kalaparichaya'],
                'number' => $row['phalitansa'],
                'colour' => $row['banna'],
                'premium' => $row['bele'],
                'typeId' => $frontendTypeId
            ];
        }
    }
    echo json_encode([
        'code' => 0,
        'msg' => 'Succeed',
        'msgCode' => 0,
        'serviceNowTime' => date('Y-m-d H:i:s'),
        'data' => [
            'list' => $list,
            'pageNo' => $pageNo,
            'pageSize' => $pageSize,
            'totalPage' => 10,
            'totalCount' => 100
        ]
    ]);
}
