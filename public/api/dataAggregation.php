<?php

require_once('icsParser.php');
require_once('youtubeAPI.php');
require_once('rssParser.php');
require_once('quoteAPI.php');
require_once('weatherApi.php');
require_once('credentials.php');




$youtubeSubcriberCount = getSubscriptionCount($youtubeUsername, $youtubeApiKey);
// echo($youtubeSubcriberCount);

//Calendar Info
$calendarInfo = getEvents($icalUrl);
// print_r($calendarInfo);

function calendarEventPreperation($calendarInfo){
    $resultArray= ['today' => []];
    for($itemIndex = 0; $itemIndex < count($calendarInfo); $itemIndex++){
        $indivEvent = $calendarInfo[$itemIndex];

        $startTime = $indivEvent['startTime'];
        $title = $indivEvent['title'];

        $resultArray['today'][] = [$startTime => $title];
    }

    return $resultArray;
}

//RSS Info
$redditParse = parseUrl($rssFeedUrl);
// print_r($redditParse);

//Quote
$quoteObj = getQuote();
// print_r($quoteObj);

//Weather API
$weatherForecast = getHourlyForecast($weatherApiKey, $locationKey);
// print_r($weatherForecast);

function weatherForecastPreperation($weatherForecast){
    $resultArray = [];
    for($itemIndex = 0; $itemIndex < count($weatherForecast); $itemIndex++){
        $indivPrediction = $weatherForecast[$itemIndex];

        $hour = $indivPrediction['hour'];
        $temperature = "{$indivPrediction['temperature']}°{$indivPrediction['unit']}";
        $description = $indivPrediction['description'];
        $img = $indivPrediction['iconImg'];

        $resultArray[] = [$hour => [$temperature, $description, $img]];
    }

    return $resultArray;
}

$responseToClient = 
[
    'quote' => $quoteObj,
    'weather'=> [
        weatherForecastPreperation($weatherForecast),
        weatherForecastPreperation($weatherForecast)
    ],
    'agenda'=> [
        calendarEventPreperation($calendarInfo)
    ]

];

// print_r($responseToClient);
?>