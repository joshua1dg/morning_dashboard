<?php

require_once('icsParser.php');
require_once('youtubeAPI.php');
require_once('rssParser.php');


//Youtube Info
$youtubeUsername = 'numlikscrlk';
$youtubeApiKey = 'AIzaSyAomD6yJRd3OeHKOVSaJjC4obGhLILjsB8';

$youtubeSubcriberCount = getSubscriptionCount($youtubeUsername, $youtubeApiKey);
// echo($youtubeSubcriberCount);

//Calendar Info
$calendarInfo = parseEvents("https://p26-calendars.icloud.com/published/2/MTAwMzg2MDM0MDEwMDM4Nur5KgGXs6A8TFGZlZ7N4VV_KKYKNia5-rUDX2N1q9MsP4gFi6_OgI2IO_yiSpx9I_X4dzGHmPkUVfZqUYcayEs");
// print_r($calendarInfo);

//RSS Info
$redditParse = parseUrl('https://www.reddit.com/r/Entrepreneur/.rss');
// print_r($redditParse);
?>