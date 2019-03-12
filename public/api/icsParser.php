<?php
require_once ( '../icsParser/iCalEasyReader.php' );
require_once('../../credentials/credentials.php');
header( 'Content-Type: text/plain; charset=UTF-8' );

function getEvents($icsFileUrl){
    $ical = new iCalEasyReader();
    $response = $ical->load( file_get_contents($icsFileUrl) );
    // echo '______________________________INITIAL RETRIEVAL_____________________________________';
    $eventArray = parseInformation($response);
    // trackRecurrence($response);
    // return $response;
    return $eventArray;
}


function parseInformation($response){
    $eventsArray = $response['VEVENT'];

    $resultEvents = [];

    for($indivIndex = 0; $indivIndex < count($eventsArray) && $indivIndex < 5; $indivIndex++){
        $indivEvent = $eventsArray[$indivIndex];
        $startUnconvenFormat = $indivEvent['DTSTART']['value'];
        $startDt = new DateTime ( $startUnconvenFormat );
        //$startTime = $startDt->format ( 'm/d/Y h:i' );
        $startTime = $startDt->format ( 'h:iA' );
        $title = $indivEvent['SUMMARY'];

        $resultEvents[] = ['startTime'=>$startTime, 'title'=>$title];

    }
    return $resultEvents;
}



function trackRecurrence($parsedIcsArray){
    $weekAbbreviations = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    $date = strtoupper(SUBSTR(date('D'), 0, 2));
    $dateNumeric = array_search($date, $weekAbbreviations);

    foreach($parsedIcsArray['VEVENT'] as $container=>$values){
        echo '_________________________________VALUES____________________';
        print_r($values);
        
        if(array_key_exists('RRULE', $values)){
            if(array_key_exists('FREQ', $values['RRULE'])){
                $daysTakenPlace = $values['RRULE']['BYDAY'];

                echo '______________________________DATES TAKEN PLACE____________________';

                echo $daysTakenPlace;
            };
        }
    }
    // echo $date;
    // echo $dateNumeric;
}

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

$responseToClient = [
        calendarEventPreperation($calendarInfo),
        ["Tuesday"=>[["4:45AM"=>"Thing 1"],["5:15AM"=>"Thing 2"],["7:00AM"=>"Thing 3"]]],
                            ["Wednesday"=>[["4:45AM"=>"Thing 1"],["5:15AM"=>"Thing 2"],["7:00AM"=>"Thing 3"]]],
                            ["Thursday"=>[["4:45AM"=>"Thing 1"],["5:15AM"=>"Thing 2"],["7=:00AM"=>"Thing 3"]]]
];

print(json_encode([
    'success' => true,
    'data' => $responseToClient //from dataAggregation.php
]));
?>