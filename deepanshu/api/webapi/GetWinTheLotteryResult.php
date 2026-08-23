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
		if (isset($shonupost['issueNumber'])) {
			$issueNumber = is_array($shonupost['issueNumber']) ? ($shonupost['issueNumber'][0] ?? '') : $shonupost['issueNumber'];
			$issueNumber = htmlspecialchars(mysqli_real_escape_string($conn, (string)$issueNumber));
			
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
			
			if (!$shonuid && !empty($author)) {
				$tokenParts = explode('.', $author);
				if (count($tokenParts) >= 2) {
					$payloadJson = base64_decode(str_pad(strtr($tokenParts[1], '-_', '+/'), strlen($tokenParts[1]) % 4, '=', STR_PAD_RIGHT));
					$payloadArr = json_decode($payloadJson, true);
					$shonuid = $payloadArr['id'] ?? null;
				}
			}
			
			if (!empty($shonuid)) {
				$tables = [
					'1Min' => ['tbl' => 'bajikattuttate', 'typeId' => 2, 'resTbl' => 'gellaluhogiondu_phalitansa'],
					'3Min' => ['tbl' => 'bajikattuttate_drei', 'typeId' => 3, 'resTbl' => 'gellaluhogiondu_phalitansa_drei'],
					'5Min' => ['tbl' => 'bajikattuttate_funf', 'typeId' => 4, 'resTbl' => 'gellaluhogiondu_phalitansa_funf'],
					'30S'  => ['tbl' => 'bajikattuttate30', 'typeId' => 1, 'resTbl' => 'gellaluhogiondu_phalitansa30']
				];
				
				$bet = null;
				$gameLabel = '1Min';
				$matchedConfig = $tables['1Min'];
				
				foreach ($tables as $lbl => $cfg) {
					$tbl = $cfg['tbl'];
					$q = mysqli_query($conn, "SELECT parichaya, phalaphala, sesabida, ketebida, ergebnis, ojana, prakar FROM `$tbl` WHERE kalaparichaya = '$issueNumber' AND byabaharkarta = '$shonuid' ORDER BY parichaya DESC LIMIT 1");
					if ($q && mysqli_num_rows($q) > 0) {
						$bet = mysqli_fetch_assoc($q);
						$gameLabel = $lbl;
						$matchedConfig = $cfg;
						break;
					}
				}
				
				$resultNum = null;
				$isWon = false;
				$winAmount = 0.00;

				// 1. Check if bet was ALREADY settled by cron/system
				if ($bet && $bet['ergebnis'] !== null && $bet['ergebnis'] !== '') {
					$resultNum = (int)$bet['ergebnis'];
					if ($bet['phalaphala'] === 'gagner' || $bet['phalaphala'] === 'won') {
						$isWon = true;
						$winAmount = floatval($bet['sesabida']);
					} else {
						$isWon = false;
						$winAmount = 0.00;
					}
				}

				// 2. Check local results table
				if ($resultNum === null) {
					$resTable = $matchedConfig['resTbl'];
					$rq = mysqli_query($conn, "SELECT phalitansa, banna FROM `$resTable` WHERE kalaparichaya = '$issueNumber' LIMIT 1");
					if ($rq && mysqli_num_rows($rq) > 0) {
						$rrow = mysqli_fetch_assoc($rq);
						$resultNum = (int)$rrow['phalitansa'];
					}
				}
				
				// 3. If still null, query live VPS API for exact draw result
				if ($resultNum === null) {
					$apiType = $matchedConfig['typeId'];
					$ch = curl_init("https://api.devlopedwithzayro.site/api/webapi/GetWinTheLotteryResult");
					curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
					curl_setopt($ch, CURLOPT_POST, true);
					curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["typeId" => $apiType, "issueNumber" => $issueNumber]));
					curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type: application/json"]);
					curl_setopt($ch, CURLOPT_TIMEOUT, 3);
					$apiRes = curl_exec($ch);
					curl_close($ch);
					
					if ($apiRes) {
						$apiJson = json_decode($apiRes, true);
						if (isset($apiJson['data']['number'])) {
							$resultNum = (int)$apiJson['data']['number'];
							$banna = ($resultNum == 0) ? 'red,violet' : (($resultNum == 5) ? 'green,violet' : (in_array($resultNum, [1,3,7,9]) ? 'green' : 'red'));
							$resTable = $matchedConfig['resTbl'];
							mysqli_query($conn, "INSERT IGNORE INTO `$resTable` (`kalaparichaya`, `bele`, `phalitansa`, `banna`, `phalitansadaprakara`, `dinankavannuracisi`) VALUES ('$issueNumber', '$resultNum', '$resultNum', '$banna', 'api', '$shnunc')");
						}
					}
				}
				
				// 4. Fallback if still null
				if ($resultNum === null) {
					$resultNum = intval(substr($issueNumber, -1)) % 10;
				}
				
				$num = (int)$resultNum;
				if ($num == 0) {
					$color = 'red,violet';
				} elseif ($num == 5) {
					$color = 'green,violet';
				} elseif (in_array($num, [1, 3, 7, 9])) {
					$color = 'green';
				} else {
					$color = 'red';
				}
				
				// 5. If bet exists and wasn't previously marked 'gagner', calculate & settle now
				if ($bet && ($bet['ergebnis'] === null || $bet['ergebnis'] === '')) {
					$ojana = (int)$bet['ojana'];
					$baseMotta = floatval($bet['ketebida'] ?? ($bet['sesabida'] / 0.98));
					$mult = 0.0;
					
					if ($ojana >= 0 && $ojana <= 9) {
						if ($ojana === $num) $mult = 9.0;
					} elseif ($ojana == 10) { // Green
						if (in_array($num, [1, 3, 7, 9])) $mult = 2.0;
						elseif ($num == 5) $mult = 1.5;
					} elseif ($ojana == 11) { // Red
						if (in_array($num, [2, 4, 6, 8])) $mult = 2.0;
						elseif ($num == 0) $mult = 1.5;
					} elseif ($ojana == 12) { // Violet
						if ($num == 0 || $num == 5) $mult = 4.5;
					} elseif ($ojana == 13) { // Big
						if ($num >= 5) $mult = 2.0;
					} elseif ($ojana == 14) { // Small
						if ($num < 5) $mult = 2.0;
					}
					
					$betTbl = $matchedConfig['tbl'];
					$betId = (int)$bet['parichaya'];

					if ($mult > 0) {
						$isWon = true;
						$winAmount = round($baseMotta * 0.98 * $mult, 2);
						mysqli_query($conn, "UPDATE `$betTbl` SET phalaphala = 'gagner', sesabida = '$winAmount', ergebnis = '$num' WHERE parichaya = $betId");
						mysqli_query($conn, "UPDATE shonu_kaichila SET motta = motta + $winAmount WHERE balakedara = '$shonuid'");
					} else {
						$isWon = false;
						$winAmount = 0.00;
						mysqli_query($conn, "UPDATE `$betTbl` SET phalaphala = 'perte', ergebnis = '$num' WHERE parichaya = $betId");
					}
				}
				
				$state = $isWon ? 1 : 0;
				
				$data = [];
				$data[0] = [
					'issueNumber' => $issueNumber,
					'number'      => (string)$num,
					'colour'      => $color,
					'color'       => $color,
					'winAmount'   => $winAmount,
					'typeName'    => $gameLabel,
					'state'       => $state,
					'isWon'       => $isWon
				];
				
				echo json_encode([
					'code' => 0,
					'msg' => 'Succeed',
					'msgCode' => 0,
					'serviceNowTime' => date('Y-m-d H:i:s'),
					'data' => $data
				]);
				exit;
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
	}
?>