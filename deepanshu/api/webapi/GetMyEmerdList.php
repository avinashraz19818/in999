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
	$shonubody = file_get_contents("php://input");
	$shonupost = json_decode($shonubody, true);
	
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
	
	if (empty($shonuid)) {
		http_response_code(401);
		echo json_encode(['code' => 4, 'msg' => 'No operation permission', 'msgCode' => 2]);
		exit;
	}
	
	$pageNo = max(1, intval($shonupost['pageNo'] ?? 1));
	$pageSize = max(1, min(50, intval($shonupost['pageSize'] ?? 10)));
	$typeId = intval($shonupost['typeId'] ?? 1);
	
	if ($typeId == 1) {
		$jayshriram = 'bajikattuttate';
	} else if ($typeId == 2) {
		$jayshriram = 'bajikattuttate_drei';
	} else if ($typeId == 3) {
		$jayshriram = 'bajikattuttate_funf';
	} else if ($typeId == 4 || $typeId == 30 || $typeId == 0 || $typeId == 5) {
		$jayshriram = 'bajikattuttate30';
	} else {
		$jayshriram = 'bajikattuttate';
	}
	
	if ($jayshriram !== 'bajikattuttate') {
		@mysqli_query($conn, "CREATE TABLE IF NOT EXISTS `$jayshriram` LIKE `bajikattuttate`");
	}
	
	$offset = ($pageNo - 1) * $pageSize;
	$samasye = "SELECT kalaparichaya, ojana, menge, wettanzahl, ketebida, phalaphala, sesabida, ergebnis, zufallig, tiarikala
	  FROM `$jayshriram` WHERE byabaharkarta = '$shonuid'
	  ORDER BY parichaya DESC LIMIT $pageSize OFFSET $offset";
	$samasyephalitansa = $conn->query($samasye);
	
	$totalQuery = mysqli_query($conn, "SELECT COUNT(*) as total FROM `$jayshriram` WHERE byabaharkarta = '$shonuid'");
	$totalRow = $totalQuery ? mysqli_fetch_assoc($totalQuery) : null;
	$totalCount = intval($totalRow['total'] ?? 0);
	
	$data = [
		'list' => [],
		'pageNo' => $pageNo,
		'pageSize' => $pageSize,
		'totalPage' => max(1, ceil($totalCount / $pageSize)),
		'totalCount' => $totalCount
	];
	
	if ($samasyephalitansa && $samasyephalitansa->num_rows > 0) {
		$i = 0;
		while ($row = $samasyephalitansa->fetch_assoc()) {
			$rawOjana = $row['ojana'];
			if ($rawOjana == 10) $ojana = 'green';
			elseif ($rawOjana == 11) $ojana = 'red';
			elseif ($rawOjana == 12) $ojana = 'violet';
			elseif ($rawOjana == 13) $ojana = 'big';
			elseif ($rawOjana == 14) $ojana = 'small';
			else $ojana = (string)$rawOjana;
			
			$isWon = ($row['phalaphala'] === 'gagner' || $row['phalaphala'] === 'won');
			$isPending = ($row['ergebnis'] === null || $row['ergebnis'] === '');
			
			$realAmount = floatval($row['ketebida']) * 0.98;
			$fee = floatval($row['ketebida']) * 0.02;
			
			$state = $isPending ? 2 : ($isWon ? 1 : 0);
			$profit = $isWon ? floatval($row['sesabida']) : 0.00;
			
			$data['list'][] = [
				'orderNumber'  => $i,
				'issueNumber'  => (string)$row['kalaparichaya'],
				'amount'       => floatval($row['menge']),
				'betCount'     => intval($row['wettanzahl']),
				'realAmount'   => $realAmount,
				'fee'          => $fee,
				'number'       => $row['ergebnis'] !== null ? (string)$row['ergebnis'] : '',
				'selectType'   => $ojana,
				'state'        => $state,
				'profitAmount' => $profit,
				'premium'      => $row['zufallig'] ?? '',
				'gameType'     => $typeId,
				'addTime'      => $row['tiarikala']
			];
			$i++;
		}
	}
	
	echo json_encode([
		'code' => 0,
		'msg' => 'Succeed',
		'msgCode' => 0,
		'serviceNowTime' => date('Y-m-d H:i:s'),
		'data' => $data
	]);
	exit;
?>