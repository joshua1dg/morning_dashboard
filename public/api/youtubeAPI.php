<?php
require_once('credentials.php');

function getSubscriptionCount($user_name, $api_key){
    $api_response = file_get_contents("https://www.googleapis.com/youtube/v3/channels?part=statistics&forUsername=$user_name&fields=items/statistics/subscriberCount&key=$api_key");
    // echo gettype($api_response);
    $decoded_response = json_decode($api_response, true);
    $subscriptionCount = $decoded_response['items'][0]['statistics']['subscriberCount'];
    
    return $subscriptionCount;

}

$responseToClient = getSubscriptionCount($youtubeUsername, $youtubeApiKey);

print(json_encode([
    'success' => true,
    'data' => $responseToClient 
]));


// $getRequest = 'https://www.googleapis.com/youtube/v3/channels';
// function channelsListByUsername($service, $part, $params) {
//     $params = array_filter($params);
//     $response = $service->channels->listChannels(
//         $part,
//         $params
//     );

//     print_r($response);
// }

// channelsListByUsername($getRequest,
//     'snippet,contentDetails,statistics', 
//     array('forUsername' => 'numlikscrlk'));
?>