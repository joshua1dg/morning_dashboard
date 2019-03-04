<?php

function parseUrl($urlToParse){
$xml = simplexml_load_file($urlToParse) or die("No Feed!");
$entries = [];
// print_r($xml);
    $currentForum = $xml->category->attributes()->term;

for($entryIndex = 1; $entryIndex < 2; $entryIndex++){
    $currentItem = $xml->entry[$entryIndex];
    $title = $currentItem->title->__toString();
    $content = $currentItem->content;

    $entries[] = [$title => $content];
    }
    return $entries;

}

// print_r(json_encode(parseUrl('https://www.reddit.com/r/Entrepreneur/.rss')));

// <!-- $url = 'https://www.reddit.com/r/Entrepreneur/.rss'; -->
// <!-- $xml = simplexml_load_file($url) or die("No Feed!"); -->
// <!-- $string = ''; -->
// <!-- print_r($xml); -->

?>

