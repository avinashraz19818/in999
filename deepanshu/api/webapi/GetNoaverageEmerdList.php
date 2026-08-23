<?php 
include "../../conn.php";
include "../../functions2.php";

header('Content-Type: application/json; charset=utf-8');
header('Strict-Transport-Security: max-age=31536000');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
header('Access-Control-Allow-Credentials: true');
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '*';
header('Access-Control-Allow-Origin: ' . $origin);
header('vary: Origin');

date_default_timezone_set("Asia/Kolkata");
$shnunc = date("Y-m-d H:i:s");
$res = [
    'code' => 11,
    'msg' => 'Method not allowed',
    'msgCode' => 12,
    'serviceNowTime' => $shnunc,
];
$shonubody = file_get_contents("php://input");
$shonupost = json_decode($shonubody, true);

// Map frontend typeId to external API typeId
function mapTypeId($frontendTypeId) {
    $map = [
        30 => 1,  // WinGo 30s -> typeId 1
        1 => 2,   // WinGo 1Min -> typeId 2
        2 => 3,   // WinGo 3Min -> typeId 3
        3 => 4,   // WinGo 5Min -> typeId 4
        4 => 1,   // WinGo 30Sec -> typeId 1
        5 => 5,   // WinGo 10Min -> typeId 5
    ];
    return $map[$frontendTypeId] ?? $frontendTypeId;
}

function callExternalApi($endpoint, $payload) {
    $apiBaseUrl = "https://api.devlopedwithzayro.site/api/webapi";
    $ch = curl_init($apiBaseUrl . $endpoint);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        "Content-Type: application/json",
        "Accept: application/json"
    ]);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    if ($httpCode == 200 && $response) {
        return json_decode($response, true);
    }
    return null;
}

if ($_SERVER['REQUEST_METHOD'] != 'GET' || isset($_GET['typeId'])) {
    $frontendTypeId = isset($shonupost['typeId']) ? intval($shonupost['typeId']) : (isset($_GET['typeId']) ? intval($_GET['typeId']) : 1);
    $typeId = mapTypeId($frontendTypeId);
    $pageNo = isset($shonupost['pageNo']) ? intval($shonupost['pageNo']) : 1;
    $pageSize = isset($shonupost['pageSize']) ? intval($shonupost['pageSize']) : 10;
    
    // Call external API
    $externalData = callExternalApi("/GetNoaverageEmerdList", [
        "typeId" => $typeId,
        "pageSize" => $pageSize
    ]);
    
    if ($externalData && isset($externalData['data']['list']) && !empty($externalData['data']['list'])) {
        $data['list'] = $externalData['data']['list'];
        $data['pageNo'] = $pageNo;
        $data['totalPage'] = ceil(($externalData['data']['totalCount'] ?? count($data['list'])) / $pageSize);
        $data['totalCount'] = $externalData['data']['totalCount'] ?? count($data['list']);
        
        $res['data'] = $data;
        $res['code'] = 0;
        $res['msg'] = 'Succeed';
        $res['msgCode'] = 0;
        $res['serviceNowTime'] = date('Y-m-d H:i:s');
        http_response_code(200);
        echo json_encode($res);
        exit;
    } else {
        // Fallback to local DB if external API fails
        if($frontendTypeId == 30 || $frontendTypeId == 4){
            $jayshriram = 'gellaluhogiondu_phalitansa30';
        }
        else if($frontendTypeId == 1){
            $jayshriram = 'gellaluhogiondu_phalitansa';
        }
        else if($frontendTypeId == 2){
            $jayshriram = 'gellaluhogiondu_phalitansa_drei';
        }
        else if($frontendTypeId == 3){
            $jayshriram = 'gellaluhogiondu_phalitansa_funf';
        }
        else {
            $jayshriram = 'gellaluhogiondu_phalitansa';
        }
        
        $samatolana = ($pageNo - 1) * $pageSize;
        $samasye = "SELECT kalaparichaya, phalitansa, banna, bele
            FROM ".$jayshriram."
            ORDER BY shonu DESC LIMIT $pageSize OFFSET $samatolana";
        $samasyephalitansa = $conn->query($samasye);
        
        $data['list'] = [];
        if ($samasyephalitansa && $samasyephalitansa->num_rows > 0) {
            $i = 0;
            while ($row = $samasyephalitansa->fetch_assoc()) {
                $data['list'][$i] = [
                    'issueNumber' => $row['kalaparichaya'],
                    'number' => $row['phalitansa'],
                    'colour' => $row['banna'],
                    'premium' => $row['bele'],
                ];
                $i++;
            }
        }
        
        $samasye_ondu = "SELECT shonu FROM ".$jayshriram;
        $samasyephalitansa_ondu = $conn->query($samasye_ondu);
        $samasyephalitansa_sankhye = $samasyephalitansa_ondu ? mysqli_num_rows($samasyephalitansa_ondu) : 0;
        
        $data['pageNo'] = $pageNo;
        $data['totalPage'] = ceil($samasyephalitansa_sankhye / $pageSize);
        $data['totalCount'] = $samasyephalitansa_sankhye;
        
        $res['data'] = $data;
        $res['code'] = 0;
        $res['msg'] = 'Succeed';
        $res['msgCode'] = 0;
        $res['serviceNowTime'] = date('Y-m-d H:i:s');
        http_response_code(200);
        echo json_encode($res);
        exit;
    }
} else {		
    http_response_code(405);
    echo json_encode($res);
}
