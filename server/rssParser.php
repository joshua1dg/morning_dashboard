<?php
$url = 'https://www.reddit.com/r/Entrepreneur/.rss';
$xml = simplexml_load_file($url) or die("No Feed!");
$string = '';
// print_r($xml);

for($entryIndex = 0; $entryIndex < 10; $entryIndex++){
    $currentItem = $xml->entry[$entryIndex];
    $title = $currentItem->title;
    $content = $currentItem->content;
    $string .= "$title";
    print_r("<p>[TITLE] $title</br><br/>[CONTENT]$content------------------END------------------</p>");
}


?>

<!-- $url = 'https://www.reddit.com/r/Entrepreneur/.rss'; -->
<!-- $xml = simplexml_load_file($url) or die("No Feed!"); -->
<!-- $string = ''; -->
<!-- print_r($xml); -->