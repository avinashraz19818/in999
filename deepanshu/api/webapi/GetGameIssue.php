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

// Map frontend typeId (30s = 4 or 30 -> 1, 1m = 1 -> 2, 3m = 2 -> 3, 5m = 3 -> 4)
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

$externalData = callExternalApi("/GetGameIssue", ["typeId" => $typeId]);

if ($externalData && isset($externalData['data']['issueNumber'])) {
    $data = $externalData['data'];
    $data['typeId'] = $frontendTypeId;
    $data['intervalM'] = ($frontendTypeId == 30 || $frontendTypeId == 4) ? 0.5 : ($frontendTypeId == 1 ? 1 : ($frontendTypeId == 2 ? 3 : 5));
    
    echo json_encode([
        'code' => 0,
        'msg' => 'Succeed',
        'msgCode' => 0,
        'serviceNowTime' => date('Y-m-d H:i:s'),
        'data' => $data
    ]);
    exit;
} else {
    // Local DB Fallback
    $intervalSec = ($frontendTypeId == 30 || $frontendTypeId == 4) ? 30 : ($frontendTypeId == 1 ? 60 : ($frontendTypeId == 2 ? 180 : 300));
    $tbl = ($frontendTypeId == 30 || $frontendTypeId == 4) ? 'gelluonduhogu30' : ($frontendTypeId == 1 ? 'gelluonduhogu' : ($frontendTypeId == 2 ? 'gelluonduhogu_drei' : 'gelluonduhogu_funf'));
    $row = mysqli_fetch_assoc(mysqli_query($conn, "SELECT atadaaidi, dinankavannuracisi FROM $tbl ORDER BY kramasankhye DESC LIMIT 1"));
    
    if ($row) {
        $startTs = strtotime($row['dinankavannuracisi']);
        $endTs = $startTs + $intervalSec;
        $nowTs = time();
        echo json_encode([
            'code' => 0,
            'msg' => 'Succeed',
            'msgCode' => 0,
            'serviceNowTime' => date('Y-m-d H:i:s'),
            'data' => [
                'issueNumber' => (string)$row['atadaaidi'],
                'startTime' => $startTs * 1000,
                'endTime' => $endTs * 1000,
                'openTime' => $endTs * 1000,
                'serviceTime' => $nowTs * 1000,
                'seconds' => max(0, $endTs - $nowTs),
                'secondsLeft' => max(0, $endTs - $nowTs),
                'typeId' => $frontendTypeId,
                'intervalM' => $intervalSec / 60
            ]
        ]);
        exit;
    }
}
