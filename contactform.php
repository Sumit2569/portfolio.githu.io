<?php

	if(isset($_POST['submit'])){
	$name = $_POST['name'];
	$email = $_POST['email'];
	$messages = $_POST['subject'];
	$number = $_POST['number'];

	$to = 'negi.sumit682@gmail.com';
	$subject = 'Form Submission';
	$msg = "Name: ".$name . "Email:".$email."Messages: ".$messages."Number:".$number;
	$header ="Form: ".$email;
	
	if(mail($to,$subject,$msg,$header)){
		echo "Sent Sucessfully !Thank You ";
	}else{
		echo "Something Went Wrong";
	}

	}

?>