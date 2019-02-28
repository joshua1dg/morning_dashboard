<?php
require ( '../icsParser/iCalEasyReader.php' );
header( 'Content-Type: text/plain; charset=UTF-8' );

function parseEvents($icsFileUrl){
    $ical = new iCalEasyReader();
    $lines = $ical->load( file_get_contents($icsFileUrl) );
    // echo '______________________________INITIAL RETRIEVAL_____________________________________';
    // print_r($lines);
    trackRecurrence($lines);
    // return $lines;
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