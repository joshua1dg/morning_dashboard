<?php

class ics {
    /* Function is to get all the contents from ics and explode all the datas according to the events and its sections */
    function getIcsEventsAsArray($file) {
        $icalString = file_get_contents ( $file );


        // print_r(json_decode($icalString));


        $icsDates = array ();
        /* Explode the ICs Data to get datas as array according to string ‘BEGIN:’ */
        $icsData = explode ( "BEGIN:", $icalString );
        /* Iterating the icsData value to make all the start end dates as sub array */
        foreach ( $icsData as $key => $value ) {
            $icsDatesMeta [$key] = explode ( "\n", $value );
        }
        /* Itearting the Ics Meta Value */
        foreach ( $icsDatesMeta as $key => $value ) {
            foreach ( $value as $subKey => $subValue ) {
                /* to get ics events in proper order */
                $icsDates = $this->getICSDates ( $key, $subKey, $subValue, $icsDates );
            }
        }
        return $icsDates;
    }

    /* funcion is to avaid the elements wich is not having the proper start, end  and summary informations */
    function getICSDates($key, $subKey, $subValue, $icsDates) {
        if ($key != 0 && $subKey == 0) {
            $icsDates [$key] ["BEGIN"] = $subValue;
        } else {
            $subValueArr = explode ( ":", $subValue, 2 );
            if (isset ( $subValueArr [1] )) {
                $icsDates [$key] [$subValueArr [0]] = $subValueArr [1];
            }
        }
        return $icsDates;
    }
}


/* Replace the URL / file path with the .ics url */
$file = "https://p26-calendars.icloud.com/published/2/MTAwMzg2MDM0MDEwMDM4Nur5KgGXs6A8TFGZlZ7N4VV_KKYKNia5-rUDX2N1q9MsP4gFi6_OgI2IO_yiSpx9I_X4dzGHmPkUVfZqUYcayEs";
/* Getting events from isc file */
$obj = new ics();
$icsEvents = $obj->getIcsEventsAsArray( $file );

// print_r($icsEvents);



function findIndex($event, $stringMatch){
    foreach($event as $key=> $value){
        if(stristr($key, $stringMatch)){
            return $value;
        }
    };
}

unset( $icsEvents [1] );
$html = '<table><tr><td> Event </td><td> Start at </td><td> End at </td></tr>';
foreach( $icsEvents as $icsEvent){
        /* Getting start date and time */
        $start = findIndex($icsEvent, 'DTSTART;TZID');
        /* Converting to datetime to get proper date time */
        $startDt = new DateTime ( $start );
        $startDate = $startDt->format ( 'm/d/Y h:i' );
        /* Getting end date with time */
        $end = findIndex($icsEvent, 'DTEND;TZID');
        $endDt = new DateTime ( $end );
        $endDate = $endDt->format ( 'm/d/Y h:i' );
        /* Getting the name of event */
        $eventName = findIndex($icsEvent, 'SUMMARY');
        $html .= '<tr><td>'.$eventName.'</td><td>'.$startDate.'</td><td>'.$endDate.'</td></tr>';
}
echo $html.'</table>';
?>