<?php

function getHourlyForecast(){
    $response = json_decode(file_get_contents('./hourlyForecastDummy'));

    for ($indivForecastIndex = 0; $indivForecastIndex < count($response); $indivForecastIndex++){
        $indivForecast = $response[$indivForecastIndex];

        $hour = $indivForecast->DateTime;
        $temperature = $indivForecast->Temperature->Value;
        $tempUnit = $indivForecast->Temperature->Unit;
        $iconPhrase = $indivForecast->IconPhrase;
        $iconImg = $indivForecast->WeatherIcon;

        // echo $tempUnit;
        // echo $temperature;
        // echo $hour;
    }
    // print_r($response);
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