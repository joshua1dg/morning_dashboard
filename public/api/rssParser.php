<?php
require_once('./credentials.php');

function parseUrl($urlToParse){
$xml = simplexml_load_file($urlToParse) or die("No Feed!");

$currentForum = $xml->category->attributes()->term->__toString();
$entries = ['Reddit'=>[$currentForum=>[]]];
// print_r($xml);
    

for($entryIndex = 1; $entryIndex < 3; $entryIndex++){
    $currentItem = $xml->entry[$entryIndex];
    $title = $currentItem->title->__toString();
    $content = $currentItem->content->__toString();

    $entries['Reddit'][$currentForum][] = ['postTitle'=> $title, 'postContent'=>$content];
    }
    return $entries;

}

$responseToClient = parseUrl($rssFeedUrl);

print(json_encode([
    'success' => true,
    'data' => $responseToClient 
]));
// print_r(json_encode(parseUrl('https://www.reddit.com/r/Entrepreneur/.rss')));

// <!-- $url = 'https://www.reddit.com/r/Entrepreneur/.rss'; -->
// <!-- $xml = simplexml_load_file($url) or die("No Feed!"); -->
// <!-- $string = ''; -->
// <!-- print_r($xml); -->

?>

