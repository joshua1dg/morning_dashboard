<?php
require_once('rssParser.php');

print(json_encode([
    'success' => true,
    'data' => parseUrl('https://www.reddit.com/r/Entrepreneur/.rss')
]));

?>