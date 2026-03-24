<?php
																																																																																																																																											
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];
$to = "hey@ankitbharwdaj.in";
$subject = "Contact Form from Gangapooja.org";

$message = "
<html>
<head>
<title>Gangapooja.org</title>
</head>
<body>
<p>The form got filled on gangapooja.org!</p>
<table>
<tr>
<th>Name</th>
<th>Email</th>
<th>Phone</th>
<th>Message</th>
</tr>
<tr>
<td>".$name."</td>
<td>".$email."</td>
<td>".$phone."</td>
<td>".$message."</td>
</tr>
</table>
</body>
</html>
";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <info@gangapooja.org>' . "\r\n";
//$headers .= 'Cc: myboss@example.com' . "\r\n";

mail($to,$subject,$message,$headers);
echo 'MF000';
?>