<?php
require ( '../icsParser/iCalEasyReader.php' );
header( 'Content-Type: text/plain; charset=UTF-8' );
$ical = new iCalEasyReader();
$lines = $ical->load( file_get_contents("https://p26-calendars.icloud.com/published/2/MTAwMzg2MDM0MDEwMDM4Nur5KgGXs6A8TFGZlZ7N4VV_KKYKNia5-rUDX2N1q9MsP4gFi6_OgI2IO_yiSpx9I_X4dzGHmPkUVfZqUYcayEs") );
var_dump( $lines );
?>