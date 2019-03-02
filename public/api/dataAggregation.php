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
// $calendarInfo = getEvents($icalUrl);
// print_r($calendarInfo);

//RSS Info
$redditParse = parseUrl($rssFeedUrl);
// print_r($redditParse);

//Quote
$quoteObj = getQuote();
// print_r($quoteObj);

//Weather API
$weatherForecast = getHourlyForecast($weatherApiKey, $locationKey);

?>