<?php
$response = json_decode(file_get_contents('http://quotes.rest/qod?category=inspire'));
$quoteInfo = $response->contents->quotes;
// $author = $quoteInfo[0]->author;
// $quote = $quoteInfo[0]->quote;
echo '<pre>';
print_r($response);
echo '</pre>';

print_r($author)
?>