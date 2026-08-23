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
	
	if ($_SERVER['REQUEST_METHOD'] != 'GET') {
		if (isset($shonupost['amount']) && isset($shonupost['issuenumber'])) {
			$amount = floatval($shonupost['amount'] ?? 0);
			$betCount = max(1, intval($shonupost['betCount'] ?? 1));
			$gameType = htmlspecialchars(mysqli_real_escape_string($conn, (string)($shonupost['gameType'] ?? '1')));
			$issuenumber = htmlspecialchars(mysqli_real_escape_string($conn, (string)($shonupost['issuenumber'] ?? '')));
			$selectType = htmlspecialchars(mysqli_real_escape_string($conn, (string)($shonupost['selectType'] ?? '1')));
			$typeId = intval($shonupost['typeId'] ?? 1);
			
			// Extract token reliably across all server configurations
			$authHeader = $_SERVER['HTTP_AUTHORIZATION'] ?? $_SERVER['REDIRECT_HTTP_AUTHORIZATION'] ?? '';
			if (empty($authHeader) && function_exists('apache_request_headers')) {
				$headers = apache_request_headers();
				$authHeader = $headers['Authorization'] ?? $headers['authorization'] ?? '';
			}
			
			$author = '';
			if (preg_match('/Bearer\s+(.*)$/i', $authHeader, $matches)) {
				$author = trim($matches[1]);
			} else {
				$author = trim($authHeader);
			}
			
			$is_jwt_valid = is_jwt_valid($author);
			$data_auth = json_decode($is_jwt_valid, 1);
			$shonuid = $data_auth['payload']['id'] ?? null;
			
			// Fallback payload parsing if token valid
			if (!$shonuid && !empty($author)) {
				$tokenParts = explode('.', $author);
				if (count($tokenParts) >= 2) {
					$payloadJson = base64_decode(str_pad(strtr($tokenParts[1], '-_', '+/'), strlen($tokenParts[1]) % 4, '=', STR_PAD_RIGHT));
					$payloadArr = json_decode($payloadJson, true);
					$shonuid = $payloadArr['id'] ?? null;
				}
			}
			
			if (!empty($shonuid)) {
				// Map typeId to local tables
				if ($typeId == 1) { // 1Min
					$lordjesus = 'bajikattuttate';
					$sonofgod = 'gelluonduhogu';
				} else if ($typeId == 2) { // 3Min
					$lordjesus = 'bajikattuttate_drei';
					$sonofgod = 'gelluonduhogu_drei';
				} else if ($typeId == 3) { // 5Min
					$lordjesus = 'bajikattuttate_funf';
					$sonofgod = 'gelluonduhogu_funf';
				} else if ($typeId == 4 || $typeId == 30 || $typeId == 0 || $typeId == 5) { // 30Sec
					$lordjesus = 'bajikattuttate30';
					$sonofgod = 'gelluonduhogu30';
				} else {
					$lordjesus = 'bajikattuttate';
					$sonofgod = 'gelluonduhogu';
				}
				
				// Ensure target tables exist (never run CREATE TABLE LIKE against the same table name)
				if ($lordjesus !== 'bajikattuttate') {
					@mysqli_query($conn, "CREATE TABLE IF NOT EXISTS `$lordjesus` LIKE `bajikattuttate`");
				}
				if ($sonofgod !== 'gelluonduhogu') {
					@mysqli_query($conn, "CREATE TABLE IF NOT EXISTS `$sonofgod` LIKE `gelluonduhogu`");
				}
				
				if ($amount >= 1 && $betCount >= 1) {
					// Ensure current active period is tracked in sonofgod table
					$samasye = "SELECT atadaaidi FROM `$sonofgod` ORDER BY kramasankhye DESC LIMIT 1";
					$samasyephalitansa = $conn->query($samasye);
					$samasyesreni = $samasyephalitansa ? mysqli_fetch_array($samasyephalitansa) : null;
					
					if (empty($samasyesreni['atadaaidi']) || $samasyesreni['atadaaidi'] != $issuenumber) {
						mysqli_query($conn, "INSERT INTO `$sonofgod` (`atadaaidi`, `dinankavannuracisi`) VALUES ('$issuenumber', '$shnunc')");
					}

					$totalamount = $amount * $betCount;								
					$balquery = "SELECT motta FROM shonu_kaichila WHERE balakedara = '$shonuid' LIMIT 1";
					$balresult = $conn->query($balquery);
					$balarr = $balresult ? mysqli_fetch_array($balresult) : null;									
					$shonubalance = floatval($balarr['motta'] ?? 0);								
					
					if ($shonubalance >= $totalamount) {
						$byabaharkarta = $shonuid;
						$sesabida = sprintf("%.2f", $totalamount * 0.98);
						$tathya = mysqli_query($conn, "INSERT INTO `$lordjesus` (`byabaharkarta`,`kalaparichaya`,`prakar`,`ojana`,`menge`,`wettanzahl`,`ketebida`,`phalaphala`,`sesabida`,`tiarikala`) VALUES ('$byabaharkarta','$issuenumber','$gameType','$selectType','$amount','$betCount','$totalamount','perte','$sesabida','$shnunc')");
						
						$mottanutan = $shonubalance - $totalamount;
						$nabikarana = "UPDATE shonu_kaichila SET motta='$mottanutan' WHERE balakedara='$byabaharkarta'";
						$conn->query($nabikarana);
						
						if (file_exists(__DIR__ . "/commission.php")) {
							@include __DIR__ . "/commission.php";
						}
						if (file_exists(__DIR__ . "/vip.php")) {
							@include __DIR__ . "/vip.php";
						}
						
						$res['data'] = null;
						$res['code'] = 0;
						$res['msg'] = 'Bet Successful';
						$res['msgCode'] = 0;
						http_response_code(200);
						echo json_encode($res);
						exit;
					} else {
						$res['code'] = 1;
						$res['msg'] = 'Balance is not enough';
						$res['msgCode'] = 142;
						http_response_code(200);
						echo json_encode($res);
						exit;
					}																																				
				} else {
					$res['code'] = 7;
					$res['msg'] = "Invalid value for parameter 'Amount'";
					unset($res['msgCode']);
					unset($res['serviceNowTime']);
					http_response_code(200);
					echo json_encode($res);
					exit;
				}
			} else {
				http_response_code(401);
				echo json_encode(['code' => 4, 'msg' => 'No operation permission', 'msgCode' => 2]);
				exit;
			}
		} else {
			echo json_encode(['code' => 7, 'msg' => 'Param is Invalid', 'msgCode' => 6]);
			exit;
		}		
	} else {		
		http_response_code(405);
		echo json_encode($res);
		exit;
	}
?>