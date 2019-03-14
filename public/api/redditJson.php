<?php
require_once('../../credentials/credentials.php');
require_once('dbConnection.php');
session_start();

$user_id = $_SESSION['user_id'];

$query = "SELECT feed_url, feed_name FROM `rssFeeds` WHERE user_id = $user_id";

$getUrl = mysqli_fetch_assoc($connection->query($query))['feed_url'] . '.json';


function parseUrl($urlToParse){

    $decodedInfo = json_decode(file_get_contents($urlToParse));

    $currentForum = $decodedInfo->data->children[0]->data->subreddit;

    $entries = ['Reddit'=>[$currentForum=>[]]];


    for($entryIndex = 1; $entryIndex < 3; $entryIndex++){
        $currentItem = $decodedInfo->data->children[$entryIndex]->data;
        $title = $currentItem->title;
        $content = html_entity_decode($currentItem->selftext_html);

        $entries['Reddit'][$currentForum][] = ['postTitle'=> $title, 'postContent'=>$content];
        }

    return $entries;

}

$responseToClient = parseUrl($getUrl);

print(json_encode([
    'success' => true,
    'data' => $responseToClient 
]));
?>