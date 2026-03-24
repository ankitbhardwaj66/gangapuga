<?php 
	$errors = '';
	$limit_size=10000000;
	$myemail = 'info@onlinegangapooja.in'; /*Replace with your email*/
	if(empty($_POST['name'])  ||
	   empty($_POST['email']) ||
	   empty($_POST['message']))
	{
	$errors .= "\n Error: Required Field";
	}	

    /*data*/
	$name = $_POST['name'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$message = $_POST['message'];
	$headers = "From: $email";

	if (!eregi(
	"^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$", 
	$email))
	{
	$errors .= "\n Error: Invalid Email Address";
	}

	if( empty($errors))
	{
	$to = $myemail;
	$email_subject = "Query from Online Ganga Pooja";
	$txt = "You have received a new message from your website. Details are given below.\n Name: $name \n Email: $email \n Message: \n $message";
	
	
 
	mail($to, $email_subject, $message, $headers);
	}
	else
	print_r($errors);
?>

