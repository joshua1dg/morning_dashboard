<?php
require_once('dbConnection.php');

$rowAmountQuery = "SELECT count(*) FROM `quote`";

$rowAmount = mysqli_fetch_assoc($connection->query($rowAmountQuery))['count(*)'];

$randomQuoteId = rand(1, $rowAmount);

$quoteQuery = "SELECT text, citation FROM `quote` WHERE quote_id = $randomQuoteId";

$quoteInfo = mysqli_fetch_assoc($connection->query($quoteQuery));

function getQuote($quoteInfo){
    // $response = json_decode(file_get_contents('http://quotes.rest/qod?category=inspire'));
    // $response = json_decode(file_get_contents('./quoteStdDummy'));
    // $quoteInfo = $response->contents->quotes;

    $quote = $quoteInfo['text'];
    $author = $quoteInfo['citation'];

    return ['text' => $quote, 'citation' => $author];
}

print_r(json_encode(getQuote($quoteInfo)));
?>