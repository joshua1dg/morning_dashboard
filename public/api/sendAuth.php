<?php
require_once('dbConnection.php');

$query = '';

$result = $connection->query($query);

if($result){
    while($row = mysqli_fetch_assoc($result)){
        print_r($row);
    }
} else {
    echo 'No result from DB';
}
?>