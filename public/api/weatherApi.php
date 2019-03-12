<?php
require_once('../../credentials/credentials.php');


// if(!isset(FROM_INSIDE)){
//     die('cannot be run directly');
// }

function getHourlyForecast(){
    $response = json_decode(file_get_contents('./hourlyForecastDummy'));

    $hourForecastArray = [];

    for ($indivForecastIndex = 0; $indivForecastIndex < count($response); $indivForecastIndex++){
        $indivForecast = $response[$indivForecastIndex];

        $hour = $indivForecast->DateTime;
        $hourObj = new DateTime ( $hour );
        $hourStd = $hourObj->format ( 'h:i' );

        $temperature = $indivForecast->Temperature->Value;
        $tempUnit = $indivForecast->Temperature->Unit;
        $description = $indivForecast->IconPhrase;
        $iconImg = $indivForecast->WeatherIcon;

        $hourForecastArray[] = ['unit'=>$tempUnit, 'temperature'=>$temperature, 'hour'=>$hourStd, 'description'=>$description, 'iconImg'=>$iconImg];

    }
    return $hourForecastArray;
    // print_r($hourForecastArray);
}

function getWeeklyForecast($apiKey, $locationKey){
    // $response = file_get_contents("http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/$locationKey?apikey=$apiKey&language=en-us");

    $response = json_decode(file_get_contents('./weekForecastDummy'));
    $dailyForecastArray = $response->DailyForecasts;

    for ($indivForecastIndex = 0; $indivForecastIndex < count($dailyForecastArray); $indivForecastIndex++){
        $indivForecast = $dailyForecastArray[$indivForecastIndex];

        $tempUnit = $indivForecast->Temperature->Minimum->Unit;
        $lowestTemp = $indivForecast->Temperature->Minimum->Value;
        $highestTemp = $indivForecast->Temperature->Maximum->Value;


        // echo $tempUnit;
        // echo $lowestTemp;
        // echo $highestTemp;
    }
    // print_r($response);
}


function weatherForecastPreperation($weatherForecast){
    $resultArray = [];
    for($itemIndex = 0; $itemIndex < count($weatherForecast); $itemIndex+=2){ //gets forecast for every 2 hours starting at current hour
        $indivPrediction = $weatherForecast[$itemIndex];

        $hour = $indivPrediction['hour'];
        $temperature = "{$indivPrediction['temperature']}°{$indivPrediction['unit']}";
        $description = $indivPrediction['description'];
        $img = $indivPrediction['iconImg'];
        // $img = file_get_contents("../weatherIcons/icon{$indivPrediction['iconImg']}.png");


        if($itemIndex === 0){
            $hour = 'Feels Like';
        }

        $resultArray[] = [$hour => [$temperature, $description, $img]];
    }

    return $resultArray;
}

function getLocationKey($weatherApiKey){
    $postData = json_decode(file_get_contents('php://input'), true);
    $longitude = $postData['longitude'];
    $latitude = $postData['latitude'];

    $resp = file_get_contents("http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=$weatherApiKey&q=$latitude%2C$longitude");
    $locationKey = json_decode($resp, true)['Key'];
    return $locationKey;
}

//____________________________________________________________


//___________________-_______________UNCOMMENT WHEN LIVE
// $locationKey = getLocationKey($weatherApiKey);

//Weather API
//______________________________________UNCOMMENT WHEN LIVE
// $weatherForecast = getHourlyForecast($weatherApiKey, $locationKey);
$weatherForecast = getHourlyForecast();

// print_r($weatherForecast);


$responseToClient = [
        weatherForecastPreperation($weatherForecast),
        [["Today"=>[83,90,"image.png"]],["Tuesday"=>[76,88,"image.png"]],["Wednesday"=>[78,83,"image.png"]],    ///dummy data placeholder
                            ["Thursday"=>[82,89,"image.png"]],["Friday"=>[79,85,"image.png"]]]
];



print(json_encode([
    'success' => true,
    'data' => $responseToClient
]));

?>