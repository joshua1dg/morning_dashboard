<?php
require ( '../icsParser/iCalEasyReader.php' );
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

    for($indivIndex = 0; $indivIndex < count($eventsArray); $indivIndex++){
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

?>