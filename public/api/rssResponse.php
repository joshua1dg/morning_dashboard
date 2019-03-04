<?php
require_once('rssParser.php');

print(json_encode([
    'success' => true,
    'data' => 'Made the connection with RSS endpoint!'
]));

?>