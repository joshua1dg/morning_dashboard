<?php
require_once('../../credentials/dbcred.php');


$connection = new mysqli($servername, $username, $password, $database);

if ($connection->connect_error){
    echo 'Error with DB';
    exit;
}

?>
