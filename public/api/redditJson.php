<?php
require_once('../../credentials/credentials.php');

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

$responseToClient = parseUrl('https://www.reddit.com/r/entrepreneur/.json');

print(json_encode([
    'success' => true,
    'data' => $responseToClient 
]));
?>