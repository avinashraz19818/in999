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
			
			$bearer = explode(" ", $_SERVER['HTTP_AUTHORIZATION'] ?? '');
			$author = $bearer[1] ?? '';				
			$is_jwt_valid = is_jwt_valid($author);
			$data_auth = json_decode($is_jwt_valid, 1);
			
			if($data_auth['status'] === 'Success') {
				$shonuid = $data_auth['payload']['id'];
				
				// Search across all bet tables for this issue and user
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
				
				// Fetch result number
				$resultNum = null;
				$resTable = $matchedConfig['resTbl'];
				$rq = mysqli_query($conn, "SELECT phalitansa, banna FROM `$resTable` WHERE kalaparichaya = '$issueNumber' LIMIT 1");
				if ($rq && mysqli_num_rows($rq) > 0) {
					$rrow = mysqli_fetch_assoc($rq);
					$resultNum = (int)$rrow['phalitansa'];
				}
				
				// If result not found in DB yet, query live API for instant settlement
				if ($resultNum === null) {
					$apiType = $matchedConfig['typeId'];
					$ch = curl_init("https://api.devlopedwithzayro.site/api/webapi/GetNoaverageEmerdList");
					curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
					curl_setopt($ch, CURLOPT_POST, true);
					curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["typeId" => $apiType, "pageSize" => 5]));
					curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type: application/json"]);
					curl_setopt($ch, CURLOPT_TIMEOUT, 3);
					$apiRes = curl_exec($ch);
					curl_close($ch);
					
					if ($apiRes) {
						$apiJson = json_decode($apiRes, true);
						if (!empty($apiJson['data']['list'])) {
							foreach ($apiJson['data']['list'] as $item) {
								if ($item['issueNumber'] == $issueNumber) {
									$resultNum = (int)$item['number'];
									// Store in results table
									$banna = ($resultNum == 0) ? 'red,violet' : (($resultNum == 5) ? 'green,violet' : (in_array($resultNum, [1,3,7,9]) ? 'green' : 'red'));
									mysqli_query($conn, "INSERT IGNORE INTO `$resTable` (`kalaparichaya`, `bele`, `phalitansa`, `banna`, `phalitansadaprakara`, `dinankavannuracisi`) VALUES ('$issueNumber', '$resultNum', '$resultNum', '$banna', 'api', '$shnunc')");
									break;
								}
							}
							if ($resultNum === null && !empty($apiJson['data']['list'][0]['number'])) {
								// If matching issue not yet recorded, use the latest drawn number
								$resultNum = (int)$apiJson['data']['list'][0]['number'];
							}
						}
					}
				}
				
				if ($resultNum === null) {
					// Fallback pseudo-random derived from issue number
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
				
				// Instant settlement if bet was found and not yet marked as winner/settled
				$isWon = false;
				$winAmount = 0.00;
				
				if ($bet) {
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
					
					if ($mult > 0) {
						$isWon = true;
						$winAmount = round($baseMotta * 0.98 * $mult, 2);
						
						// If bet not already marked 'gagner', update and credit wallet
						if ($bet['phalaphala'] !== 'gagner') {
							$betTbl = $matchedConfig['tbl'];
							$betId = (int)$bet['parichaya'];
							mysqli_query($conn, "UPDATE `$betTbl` SET phalaphala = 'gagner', sesabida = '$winAmount', ergebnis = '$num' WHERE parichaya = $betId");
							mysqli_query($conn, "UPDATE shonu_kaichila SET motta = motta + $winAmount WHERE balakedara = '$shonuid'");
						} else {
							$winAmount = floatval($bet['sesabida']);
						}
					} else {
						$isWon = false;
						$winAmount = 0.00;
						$betTbl = $matchedConfig['tbl'];
						$betId = (int)$bet['parichaya'];
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