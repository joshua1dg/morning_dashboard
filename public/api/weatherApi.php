<?php

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

?>