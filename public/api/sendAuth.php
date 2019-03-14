<?php
require_once('dbConnection.php');

session_start();

$postData = json_decode(file_get_contents('php://input'), true);

$email = $postData['username'];
$password = $postData['password'];

$querySignIn = "SELECT user_id FROM userInfo WHERE email = '$email' AND password= '$password';";
$signInResult = $connection->query($querySignIn);

$user_id;

if(!$signInResult){
    $user_id = 'no register result!';
} else if($signInResult->num_rows === 0){
    $queryRegister = "INSERT INTO userInfo (email, password) VALUES('$email', '$password');";
    $registerResult = $connection->query($queryRegister);

    $user_id = $connection->insert_id;
} else {
    $user_id = intval(mysqli_fetch_assoc($signInResult)['user_id']);
}

$_SESSION["user_id"] = $user_id;

print(json_encode(['success'=>true, 'data'=>'Login Successful']));

?>