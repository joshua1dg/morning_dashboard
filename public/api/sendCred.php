<?php
require_once('dbConnection.php');

$postData = json_decode(file_get_contents('php://input'), true);

$calendarUrl = $postData['AppleCalendarInfo'];
$username = $postData['username'];
$redditInfo = $postData['RedditInfo'];
$youtubeInfo = $postData['YoutubeInfo'];

// echo $calendarUrl;
// echo $username;
// echo $redditInfo;
// echo $youtubeInfo;

$queryRegister = "INSERT INTO userInfo (email, password) VALUES('$username', 'we');";

echo "\n$queryRegister\n";

$registerResult = $connection->query($queryRegister);
if(!$registerResult){
    echo 'no register result!';
}

$user_id = $connection->insert_id;

$queryPopulateInfo = 
"
INSERT INTO agendas(user_id, calendar_url, calendar_name) VALUES('$user_id', '$calendarUrl', 'calendarTest');
INSERT INTO rssFeeds(user_id, feed_url, feed_name) VALUES ('$user_id', '$redditInfo', 'Feed Test');
INSERT INTO youtubeInfo(user_id, username) VALUES('$user_id', '$youtubeInfo');
";

// $query = 'SELECT * FROM `userInfo`';

$result = $connection->multi_query($queryPopulateInfo);

echo $user_id;

if($user_id){
    print(json_encode(['success' => 'true', 'data'=> $user_id]));
} else {
    echo 'No result from DB';
}


