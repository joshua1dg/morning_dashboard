<?php
define('FROM_INSIDE', true);
require_once('youtubeAPI.php');
require_once('weatherApi.php');
require_once('credentials.php');




// $youtubeSubcriberCount = getSubscriptionCount($youtubeUsername, $youtubeApiKey);
// echo($youtubeSubcriberCount);

// //Calendar Info
// $calendarInfo = getEvents($icalUrl);
// // print_r($calendarInfo);

// function calendarEventPreperation($calendarInfo){
//     $resultArray= ['today' => []];
//     for($itemIndex = 0; $itemIndex < count($calendarInfo); $itemIndex++){
//         $indivEvent = $calendarInfo[$itemIndex];

//         $startTime = $indivEvent['startTime'];
//         $title = $indivEvent['title'];

//         $resultArray['today'][] = [$startTime => $title];
//     }

//     return $resultArray;
// }

//RSS Info
// $redditParse = parseUrl($rssFeedUrl);
// print_r($redditParse);

//Quote
// $quoteObj = getQuote();
// print_r($quoteObj);

// //Weather API
// $weatherForecast = getHourlyForecast($weatherApiKey, $locationKey);
// // print_r($weatherForecast);

// function weatherForecastPreperation($weatherForecast){
//     $resultArray = [];
//     for($itemIndex = 0; $itemIndex < count($weatherForecast); $itemIndex+=2){ //gets forecast for every 2 hours starting at current hour
//         $indivPrediction = $weatherForecast[$itemIndex];

//         $hour = $indivPrediction['hour'];
//         $temperature = "{$indivPrediction['temperature']}°{$indivPrediction['unit']}";
//         $description = $indivPrediction['description'];
//         $img = $indivPrediction['iconImg'];
//         // $img = file_get_contents("../weatherIcons/icon{$indivPrediction['iconImg']}.png");


//         if($itemIndex === 0){
//             $hour = 'Feels Like';
//         }

//         $resultArray[] = [$hour => [$temperature, $description, $img]];
//     }

//     return $resultArray;
// }

$responseToClient = 
[
    // 'quote' => $quoteObj,
    // 'weather'=> [
    //     weatherForecastPreperation($weatherForecast),
    //     [["Today"=>[83,90,"image.png"]],["Tuesday"=>[76,88,"image.png"]],["Wednesday"=>[78,83,"image.png"]],    ///dummy data placeholder
    //                         ["Thursday"=>[82,89,"image.png"]],["Friday"=>[79,85,"image.png"]]]
    // ],
    // 'agenda'=> [
    //     calendarEventPreperation($calendarInfo),
    //     ["Tuesday"=>[["4:45AM"=>"Thing 1"],["5:15AM"=>"Thing 2"],["7:00AM"=>"Thing 3"]]],
    //                         ["Wednesday"=>[["4:45AM"=>"Thing 1"],["5:15AM"=>"Thing 2"],["7:00AM"=>"Thing 3"]]],
    //                         ["Thursday"=>[["4:45AM"=>"Thing 1"],["5:15AM"=>"Thing 2"],["7=:00AM"=>"Thing 3"]]]
    // ]

];

// print_r($responseToClient);
?>