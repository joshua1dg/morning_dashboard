<?php

function getQuote(){
    // $response = json_decode(file_get_contents('http://quotes.rest/qod?category=inspire'));
    $response = json_decode(file_get_contents('./quoteStdDummy'));
    $quoteInfo = $response->contents->quotes;

    $quote = $quoteInfo[0]->quote;
    $author = $quoteInfo[0]->author;

    return ['quote' => $quote, 'author' => $author];
}


?>