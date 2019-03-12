<?php
$data = 'https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en';


function parseGoogleNews($url){

    $xml = simplexml_load_file($url) or die("No Feed!");

    $stories = $xml->channel->item;
    $category = $xml->channel->title->__toString();

    $entries = ['GoogleNews'=>[$category=>[]]];

    for ($count=0; $count < 8; $count++){
        $indivStory = $stories[$count];
        $title = $indivStory->title->__toString();
        $description = $indivStory->description->__toString();


        $entries['GoogleNews'][$category][] = ['postTitle'=> $title, 'postContent'=>$description];

    }
    return $entries;

}

$responseToClient = parseGoogleNews($data);

print_r(json_encode([
    'success' => true,
    'data' => $responseToClient 
]));


?>