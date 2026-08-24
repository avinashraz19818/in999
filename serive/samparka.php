<?php
	$conn = mysqli_connect('localhost', 'club532583_in999', 'club532583_in999', 'club532583_in999');
	
	if (!$conn) {
		echo "Error: " . mysqli_connect_error();
		exit();
	}
	
	date_default_timezone_set("Asia/Kolkata"); 
?>