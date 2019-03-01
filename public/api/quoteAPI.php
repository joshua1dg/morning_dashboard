<?php
$response = json_decode(file_get_contents('http://quotes.rest/qod?category=inspire'));
$author = $response->contents->quotes->author;
print_r($response);

?>