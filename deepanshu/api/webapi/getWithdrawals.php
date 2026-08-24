<?php 
include "../../conn.php";
include "../../functions2.php";

header('Content-Type: application/json; charset=utf-8');
header('Strict-Transport-Security: max-age=31536000');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
header('Access-Control-Allow-Credentials: true');
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
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

$body = file_get_contents("php://input");
$post = json_decode($body, true);

function maskBank($s){
    if(strlen($s) < 10) return $s;
    return substr($s,0,6)."****".substr($s,10);
}

if($_SERVER['REQUEST_METHOD'] != 'GET'){

    if(isset($post['language']) && isset($post['random']) && isset($post['signature']) && isset($post['timestamp']) && isset($post['withdrawid'])){

        $language = $post['language'];
        $random   = $post['random'];
        $signature = $post['signature'];
        $withdrawid = intval($post['withdrawid']);

        $str = '{"language":'.$language.',"random":"'.$random.'","withdrawid":'.$withdrawid.'}';
        $sign = strtoupper(md5($str));

        if($sign != $signature){
            echo json_encode(['code'=>5,'msg'=>'Wrong signature','msgCode'=>3,'serviceNowTime'=>$shnunc]);
            exit;
        }

        $bearer = explode(" ", $_SERVER['HTTP_AUTHORIZATION']);
        $author = $bearer[1];
        $jwt = is_jwt_valid($author);
        $auth = json_decode($jwt, true);

        if($auth['status'] !== 'Success'){
            echo json_encode(['code'=>4,'msg'=>'No operation permission','msgCode'=>2,'serviceNowTime'=>$shnunc]);
            exit;
        }

        $uid = $auth['payload']['id'];

        /** -------------------------------------------------------
         *  WITHDRAWID = 1  → BANK
         *  WITHDRAWID = 2  → UPI  (NEW)
         *  WITHDRAWID = 3  → TRC
         * ------------------------------------------------------ */

        $data = [];
        $data["withdrawalslist"] = [];

        /* -------------------- BANK -------------------- */
        if($withdrawid == 1){

            $q = $conn->query("SELECT phalanubhavi FROM khate WHERE byabaharkarta=$uid AND khatehesaru!='TRC' ORDER BY shonu DESC LIMIT 1");

            if(mysqli_num_rows($q)>0){
                $r = mysqli_fetch_assoc($q);
                $data['lastBandCarkName'] = $r['phalanubhavi'];
            } else {
                $data['lastBandCarkName'] = null;
            }

            $q2 = $conn->query("SELECT * FROM khate WHERE byabaharkarta=$uid AND khatehesaru!='TRC' ORDER BY shonu DESC");
            while($row = mysqli_fetch_assoc($q2)){
                $data['withdrawalslist'][] = [
                    "bid" => $row['shonu'],
                    "bankName" => $row['khatehesaru'],
                    "beneficiaryName" => "",
                    "accountNo" => maskBank($row['khatesankhye']),
                    "ifsCode" => $row['kod'],
                    "withType" => 1,
                    "mobileNo" => maskBank($row['duravani']),
                    "bankProvince" => "",
                    "bankCity" => "",
                    "bankAddress" => ""
                ];
            }
        }

        /* -------------------- UPI (NEW BLOCK) -------------------- */
        if($withdrawid == 2){

            // direct UPI table check
            $uq = $conn->query("SELECT * FROM upi_withdrawal WHERE user_id=$uid ORDER BY id DESC LIMIT 1");

            if(mysqli_num_rows($uq) > 0){
                $u = mysqli_fetch_assoc($uq);

                $data['lastBandCarkName'] = $u['name'];

                // ORIGINAL FORMAT (NO MASKING)
                $data['withdrawalslist'][] = [
                    "bid" => $u['id'],
                    "upiName" => $u['name'],
                    "upiAccount" => $u['upi_id'],
                    "mobileNo" => $u['mobile'],
                    "bankCode" => "",
                    "isKycOnline" => false
                ];
            } else {
                $data['lastBandCarkName'] = null;
            }
        }

        /* -------------------- TRC -------------------- */
        if($withdrawid == 3){

            $q = $conn->query("SELECT phalanubhavi FROM khate WHERE byabaharkarta=$uid AND khatehesaru='TRC' ORDER BY shonu DESC LIMIT 1");

            if(mysqli_num_rows($q)>0){
                $r = mysqli_fetch_assoc($q);
                $data['lastBandCarkName'] = $r['phalanubhavi'];
            } else {
                $data['lastBandCarkName'] = null;
            }

            $q2 = $conn->query("SELECT * FROM khate WHERE byabaharkarta=$uid AND khatehesaru='TRC' ORDER BY shonu DESC");

            while($row=mysqli_fetch_assoc($q2)){
                $data['withdrawalslist'][] = [
                    "bid" => $row['shonu'],
                    "bankName" => $row['khatehesaru'],
                    "beneficiaryName" => "",
                    "accountNo" => maskBank($row['khatesankhye']),
                    "ifsCode" => $row['kod'],
                    "withType" => 1,
                    "mobileNo" => maskBank($row['duravani']),
                    "bankProvince" => "",
                    "bankCity" => "",
                    "bankAddress" => ""
                ];
            }
        }

        /* ---------------- RULES + BALANCE (UNCHANGED) ---------------- */
        $samasye_1 = $conn->query("SELECT shonu FROM hintegedukolli WHERE balakedara='$uid' AND DATE(dinankavannuracisi)=DATE('$shnunc')");
        $shelly = mysqli_num_rows($samasye_1);

        $rem = ($withdrawid==3 ? 5 : 3) - $shelly;

        $data["withdrawalsrule"] = [
            "withdrawCount" => $shelly,
            "withdrawRemainingCount" => $rem,
            "startTime" => "00:00",
            "endTime" => "23:59",
            "fee" => 0,
            "minPrice" => 110,
            "maxPrice" => 50000
        ];

        $balq = $conn->query("SELECT motta FROM shonu_kaichila WHERE balakedara=$uid LIMIT 1");
        $bal = mysqli_fetch_assoc($balq);

        $data["withdrawalsrule"]["amount"] = $bal["motta"];

        $res['data'] = $data;
        $res['code'] = 0;
        $res['msg'] = 'Succeed';
        $res['msgCode'] = 0;

        echo json_encode($res);
        exit;

    } else {
        echo json_encode(['code'=>7,'msg'=>'Param is Invalid','msgCode'=>6,'serviceNowTime'=>$shnunc]);
        exit;
    }

} else {
    http_response_code(405);
    echo json_encode($res);
    exit;
}
?>
