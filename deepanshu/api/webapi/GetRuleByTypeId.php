<?php 
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
$shnunc = date("Y-m-d H:i:s");

$shonubody = file_get_contents("php://input");
$shonupost = json_decode($shonubody, true);
if (empty($shonupost)) {
    $shonupost = $_POST;
}

$typeId = isset($shonupost['typeId']) ? (int)$shonupost['typeId'] : (isset($_GET['typeId']) ? (int)$_GET['typeId'] : 1);

$rules = [
    1 => '<p>1 minutes 1 issue, 45 seconds to order, 15 seconds waiting for the draw. If you spend 100 to trade, after deducting 2 service fee, contract amount is 98:</p><p>1. Green (1,3,7,9): 98*2=196; (5): 98*1.5=147</p><p>2. Red (2,4,6,8): 98*2=196; (0): 98*1.5=147</p><p>3. Violet (0,5): 98*4.5=441</p><p>4. Number (0-9): 98*9=882</p><p>5. Big/Small: 98*2=196</p>',
    2 => '<p>3 minutes 1 issue, 45 seconds to order, 15 seconds waiting for the draw. If you spend 100 to trade, after deducting 2 service fee, contract amount is 98:</p><p>1. Green (1,3,7,9): 98*2=196; (5): 98*1.5=147</p><p>2. Red (2,4,6,8): 98*2=196; (0): 98*1.5=147</p><p>3. Violet (0,5): 98*4.5=441</p><p>4. Number (0-9): 98*9=882</p><p>5. Big/Small: 98*2=196</p>',
    3 => '<p>5 minutes 1 issue, 45 seconds to order, 15 seconds waiting for the draw. If you spend 100 to trade, after deducting 2 service fee, contract amount is 98:</p><p>1. Green (1,3,7,9): 98*2=196; (5): 98*1.5=147</p><p>2. Red (2,4,6,8): 98*2=196; (0): 98*1.5=147</p><p>3. Violet (0,5): 98*4.5=441</p><p>4. Number (0-9): 98*9=882</p><p>5. Big/Small: 98*2=196</p>',
    4 => '<p>30 sec 1 issue, 25 seconds to order, 5 seconds waiting for the draw. If you spend 100 to trade, after deducting 2 service fee, contract amount is 98:</p><p>1. Green (1,3,7,9): 98*2=196; (5): 98*1.5=147</p><p>2. Red (2,4,6,8): 98*2=196; (0): 98*1.5=147</p><p>3. Violet (0,5): 98*4.5=441</p><p>4. Number (0-9): 98*9=882</p><p>5. Big/Small: 98*2=196</p>'
];

$gamePresentation = isset($rules[$typeId]) ? $rules[$typeId] : $rules[1];

$data = [
    'typeID' => $typeId,
    'gamePresentation' => $gamePresentation
];

http_response_code(200);
echo json_encode([
    'code' => 0,
    'msg' => 'Succeed',
    'msgCode' => 0,
    'serviceNowTime' => $shnunc,
    'data' => $data
], JSON_UNESCAPED_UNICODE);
?>