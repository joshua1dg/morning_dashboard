<?php
$user_name = "numlikscrlk";
$api_key = "AIzaSyAomD6yJRd3OeHKOVSaJjC4obGhLILjsB8";
$api_response = file_get_contents("https://www.googleapis.com/youtube/v3/channels?part=statistics&forUsername=$user_name&fields=items/statistics/subscriberCount&key=$api_key");

echo $api_response;
?>