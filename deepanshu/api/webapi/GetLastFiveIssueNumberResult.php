<?php 
include_once "../../conn.php";
include_once "../../functions2.php";
include_once "WingoEngine.php";

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
$cfg = WingoEngine::getConfig($typeId);
$resultTable = $cfg['resultTable'];

$numbers = [];
if ($conn) {
    $res = mysqli_query($conn, "SELECT phalitansa FROM `$resultTable` ORDER BY shonu DESC LIMIT 5");
    if ($res && mysqli_num_rows($res) > 0) {
        while ($row = mysqli_fetch_assoc($res)) {
            $numbers[] = $row['phalitansa'];
        }
    }
}

if (empty($numbers)) {
    for ($i = 0; $i < 5; $i++) {
        $numbers[] = rand(0, 9);
    }
}

$data = [
    'number' => implode(',', $numbers)
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