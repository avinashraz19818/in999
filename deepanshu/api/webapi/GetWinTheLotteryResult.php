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
					'1Min' => 'bajikattuttate',
					'3Min' => 'bajikattuttate_drei',
					'5Min' => 'bajikattuttate_funf',
					'30S'  => 'bajikattuttate30'
				];
				
				$bet = null;
				$gameLabel = '1Min';
				
				foreach ($tables as $lbl => $tbl) {
					$q = mysqli_query($conn, "SELECT phalaphala, sesabida, ketebida, ergebnis, ojana, prakar FROM `$tbl` WHERE kalaparichaya = '$issueNumber' AND byabaharkarta = '$shonuid' ORDER BY parichaya DESC LIMIT 1");
					if ($q && mysqli_num_rows($q) > 0) {
						$bet = mysqli_fetch_assoc($q);
						$gameLabel = $lbl;
						break;
					}
				}
				
				// If not found by user, check results table for draw info
				$resultNum = $bet['ergebnis'] ?? null;
				if ($resultNum === null) {
					$resTables = ['gellaluhogiondu_phalitansa', 'gellaluhogiondu_phalitansa30', 'gellaluhogiondu_phalitansa_drei', 'gellaluhogiondu_phalitansa_funf'];
					foreach ($resTables as $rtbl) {
						$rq = mysqli_query($conn, "SELECT phalitansa, banna FROM `$rtbl` WHERE kalaparichaya = '$issueNumber' LIMIT 1");
						if ($rq && mysqli_num_rows($rq) > 0) {
							$rrow = mysqli_fetch_assoc($rq);
							$resultNum = (int)$rrow['phalitansa'];
							break;
						}
					}
				}
				
				$num = ($resultNum !== null) ? (int)$resultNum : 0;
				if ($num == 0) {
					$color = 'red,violet';
				} elseif ($num == 5) {
					$color = 'green,violet';
				} elseif (in_array($num, [1, 3, 7, 9])) {
					$color = 'green';
				} else {
					$color = 'red';
				}
				
				$isWon = ($bet && ($bet['phalaphala'] === 'gagner' || $bet['phalaphala'] === 'won'));
				$state = $isWon ? 1 : 0;
				$winAmount = $isWon ? floatval($bet['sesabida']) : 0.00;
				
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