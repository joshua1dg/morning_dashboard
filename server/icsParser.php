<?php
require ( '../icsParser/iCalEasyReader.php' );
header( 'Content-Type: text/plain; charset=UTF-8' );

function parseEvents($icsFileUrl){
    $ical = new iCalEasyReader();
    $lines = $ical->load( file_get_contents($icsFileUrl) );
    return $lines;
}


?>