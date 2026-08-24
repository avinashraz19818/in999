<?php 
	function generate_jwt($headers, $payload, $secret = 'bdgshonuuncensored') {
		$headers_encoded = base64url_encode(json_encode($headers));
		$payload_encoded = base64url_encode(json_encode($payload));
		$signature = hash_hmac('SHA256', "$headers_encoded.$payload_encoded", $secret, true);
		$signature_encoded = base64url_encode($signature);
		return "$headers_encoded.$payload_encoded.$signature_encoded";
	}
	
	function is_jwt_valid($jwt, $secret = 'bdgshonuuncensored') {
		$res = [
			'status' => 'Failed',
			'payload' => null,
		];

		if (empty($jwt) || !is_string($jwt) || substr_count($jwt, '.') !== 2) {
			return json_encode($res);
		}

		$tokenParts = explode('.', $jwt);
		$header = base64_decode($tokenParts[0]);
		$payload = base64_decode($tokenParts[1]);
		$signature_provided = $tokenParts[2];

		$base64_url_header = base64url_encode($header);
		$base64_url_payload = base64url_encode($payload);
		$signature = hash_hmac('SHA256', $base64_url_header . "." . $base64_url_payload, $secret, true);
		$base64_url_signature = base64url_encode($signature);

		$is_signature_valid = ($base64_url_signature === $signature_provided);
		
		if ($is_signature_valid) {
			$res['status'] = 'Success';
			$res['payload'] = json_decode($payload, true);
		}
		
		return json_encode($res);
	}
	
	function base64url_encode($str) {
		return rtrim(strtr(base64_encode($str), '+/', '-_'), '=');
	}

	function get_auth_token() {
		$token = '';
		if (!empty($_SERVER['HTTP_AUTHORIZATION'])) {
			$token = $_SERVER['HTTP_AUTHORIZATION'];
		} elseif (!empty($_SERVER['REDIRECT_HTTP_AUTHORIZATION'])) {
			$token = $_SERVER['REDIRECT_HTTP_AUTHORIZATION'];
		} elseif (function_exists('getallheaders')) {
			$headers = getallheaders();
			if (!empty($headers['Authorization'])) {
				$token = $headers['Authorization'];
			} elseif (!empty($headers['authorization'])) {
				$token = $headers['authorization'];
			}
		} elseif (function_exists('apache_request_headers')) {
			$headers = apache_request_headers();
			if (!empty($headers['Authorization'])) {
				$token = $headers['Authorization'];
			} elseif (!empty($headers['authorization'])) {
				$token = $headers['authorization'];
			}
		}
		
		if (!empty($token) && stripos($token, 'Bearer ') === 0) {
			return substr($token, 7);
		}
		return trim($token);
	}
?>