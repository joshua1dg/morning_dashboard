<?php
// $user_name = "numlikscrlk";
// $api_key = "AIzaSyAomD6yJRd3OeHKOVSaJjC4obGhLILjsB8";
// $api_response = file_get_contents("https://www.googleapis.com/youtube/v3/channels?part=statistics&forUsername=$user_name&fields=items/statistics/subscriberCount&key=$api_key");

// echo $api_response;

$getRequest = 'https://www.googleapis.com/youtube/v3/channels';
function channelsListByUsername($service, $part, $params) {
    $params = array_filter($params);
    $response = $service->channels->listChannels(
        $part,
        $params
    );

    print_r($response);
}

channelsListByUsername($getRequest,
    'snippet,contentDetails,statistics', 
    array('forUsername' => 'numlikscrlk'));
?>