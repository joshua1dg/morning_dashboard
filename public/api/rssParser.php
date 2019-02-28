<?php

function parseUrl($urlToParse){
$xml = simplexml_load_file($urlToParse) or die("No Feed!");
$entries = [];
// print_r($xml);

for($entryIndex = 0; $entryIndex < 1; $entryIndex++){
    $currentItem = $xml->entry[$entryIndex];
    $title = $currentItem->title;
    $content = $currentItem->content;
    $entries[] = [$title, $content];
    }
    return $entries;

}


// <!-- $url = 'https://www.reddit.com/r/Entrepreneur/.rss'; -->
// <!-- $xml = simplexml_load_file($url) or die("No Feed!"); -->
// <!-- $string = ''; -->
// <!-- print_r($xml); -->

?>

