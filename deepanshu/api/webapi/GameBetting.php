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
			$betCount = intval($shonupost['betCount'] ?? 1);
			$gameType = htmlspecialchars(mysqli_real_escape_string($conn, (string)($shonupost['gameType'] ?? '1')));
			$issuenumber = htmlspecialchars(mysqli_real_escape_string($conn, (string)($shonupost['issuenumber'] ?? '')));
			$language = htmlspecialchars(mysqli_real_escape_string($conn, (string)($shonupost['language'] ?? '0')));
			$random = htmlspecialchars(mysqli_real_escape_string($conn, (string)($shonupost['random'] ?? '')));
			$selectType = htmlspecialchars(mysqli_real_escape_string($conn, (string)($shonupost['selectType'] ?? '1')));
			$signature = htmlspecialchars(mysqli_real_escape_string($conn, (string)($shonupost['signature'] ?? '')));
			$typeId = intval($shonupost['typeId'] ?? 1);
			
			$bearer = explode(" ", $_SERVER['HTTP_AUTHORIZATION'] ?? '');
			$author = $bearer[1] ?? '';				
			$is_jwt_valid = is_jwt_valid($author);
			$data_auth = json_decode($is_jwt_valid, 1);
			
			if($data_auth['status'] === 'Success') {
				$shonuid = $data_auth['payload']['id'];
				$sesquery = "SELECT akshinak FROM shonu_subjects WHERE id = '$shonuid' LIMIT 1";
				$sesresult = $conn->query($sesquery);
				$sesnum = $sesresult ? mysqli_num_rows($sesresult) : 0;
				
				if($sesnum >= 1 || !empty($shonuid)){
					// Determine table based on game type
					if($typeId == 1){
						$lordjesus = 'bajikattuttate';
						$sonofgod = 'gelluonduhogu';
					}
					else if($typeId == 2){
						$lordjesus = 'bajikattuttate_drei';
						$sonofgod = 'gelluonduhogu_drei';
					}
					else if($typeId == 3){
						$lordjesus = 'bajikattuttate_funf';
						$sonofgod = 'gelluonduhogu_funf';
					}
					else if($typeId == 4 || $typeId == 30 || $typeId == 5){
						$lordjesus = 'bajikattuttate30';
						$sonofgod = 'gelluonduhogu30';
					} else {
						$lordjesus = 'bajikattuttate';
						$sonofgod = 'gelluonduhogu';
					}
					
					// Auto create tables if they do not exist in database
					mysqli_query($conn, "CREATE TABLE IF NOT EXISTS `$lordjesus` LIKE `bajikattuttate`");
					mysqli_query($conn, "CREATE TABLE IF NOT EXISTS `$sonofgod` LIKE `gelluonduhogu`");
					
					if($betCount >= 1){
						if($amount >= 1){
							// Ensure current active period is tracked
							$samasye = "SELECT atadaaidi FROM `$sonofgod` ORDER BY kramasankhye DESC LIMIT 1";
							$samasyephalitansa = $conn->query($samasye);
							$samasyesreni = $samasyephalitansa ? mysqli_fetch_array($samasyephalitansa) : null;
							
							// Auto sync current period in table
							if (empty($samasyesreni['atadaaidi']) || $samasyesreni['atadaaidi'] != $issuenumber) {
								mysqli_query($conn, "INSERT INTO `$sonofgod` (`atadaaidi`, `dinankavannuracisi`) VALUES ('$issuenumber', '$shnunc')");
							}

							$totalamount = $amount * $betCount;								
							$balquery = "SELECT motta FROM shonu_kaichila WHERE balakedara = '$shonuid' LIMIT 1";
							$balresult = $conn->query($balquery);
							$balarr = $balresult ? mysqli_fetch_array($balresult) : null;									
							$shonubalance = floatval($balarr['motta'] ?? 0);								
							
							if($shonubalance >= $totalamount){
								$byabaharkarta = $shonuid;
								$sesabida = sprintf("%.2f", $totalamount * 0.98);
								$tathya = mysqli_query($conn,"INSERT INTO `$lordjesus` (`byabaharkarta`,`kalaparichaya`,`prakar`,`ojana`,`menge`,`wettanzahl`,`ketebida`,`phalaphala`,`sesabida`,`tiarikala`) VALUES ('$byabaharkarta','$issuenumber','$gameType','$selectType','$amount','$betCount','$totalamount','perte','$sesabida','$shnunc')");
								
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
							}
							else{
								$res['code'] = 1;
								$res['msg'] = 'Balance is not enough';
								$res['msgCode'] = 142;
								http_response_code(200);
								echo json_encode($res);
								exit;
							}																																				
						}
						else{
							$res['code'] = 7;
							$res['msg'] = "Invalid value for parameter 'Amount'";
							unset($res['msgCode']);
							unset($res['serviceNowTime']);
							http_response_code(200);
							echo json_encode($res);
							exit;
						}
					}
					else{
						$res['code'] = 7;
						$res['msg'] = "Invalid value for parameter 'BetCount'";
						unset($res['msgCode']);
						unset($res['serviceNowTime']);
						http_response_code(200);
						echo json_encode($res);
						exit;
					}
				}
				else{
					$res['code'] = 4;
					$res['msg'] = 'No operation permission';
					$res['msgCode'] = 2;
					http_response_code(401);
					echo json_encode($res);
					exit;
				}					
			}
			else{					
				$res['code'] = 4;
				$res['msg'] = 'No operation permission';
				$res['msgCode'] = 2;
				http_response_code(401);
				echo json_encode($res);
				exit;					
			}
		}
		else{
			$res['code'] = 7;
			$res['msg'] = 'Param is Invalid';
			$res['msgCode'] = 6;
			http_response_code(200);
			echo json_encode($res);
			exit;			
		}		
	} else {		
		http_response_code(405);
		echo json_encode($res);
		exit;
	}
?>