<?php
/**
 * WinGo GetTypeList Endpoint
 */

include_once "../../conn.php";
include_once "../../functions2.php";

header('Content-Type: application/json; charset=utf-8');
header('Strict-Transport-Security: max-age=31536000');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
header('Access-Control-Allow-Credentials: true');
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '*';
header('Access-Control-Allow-Origin: ' . $origin);
header('vary: Origin');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

date_default_timezone_set("Asia/Kolkata");
$nowTime = date("Y-m-d H:i:s");

$data = [
    [
        'typeID'      => 4,
        'typeName'    => 'Win 30s',
        'intervalM'   => 0.5,
        'scope'       => '1|10|100|1000',
        'betMultiple' => '1|5|10|20|50|100',
        'sort'        => 4
    ],
    [
        'typeID'      => 1,
        'typeName'    => 'Win 1 minute',
        'intervalM'   => 1,
        'scope'       => '1|10|100|1000',
        'betMultiple' => '1|5|10|20|50|100',
        'sort'        => 3
    ],
    [
        'typeID'      => 2,
        'typeName'    => 'Win 3 minute',
        'intervalM'   => 3,
        'scope'       => '1|10|100|1000',
        'betMultiple' => '1|5|10|20|50|100',
        'sort'        => 2
    ],
    [
        'typeID'      => 3,
        'typeName'    => 'Win 5 minute',
        'intervalM'   => 5,
        'scope'       => '1|10|100|1000',
        'betMultiple' => '1|5|10|20|50|100',
        'sort'        => 1
    ]
];

$response = [
    'code' => 0,
    'msg' => 'Succeed',
    'msgCode' => 0,
    'serviceNowTime' => $nowTime,
    'data' => $data
];

http_response_code(200);
echo json_encode($response, JSON_UNESCAPED_UNICODE);
?>