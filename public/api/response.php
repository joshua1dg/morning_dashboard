<?php
require_once('dataAggregation.php');

$dummyHomeInfoToSend = ["user_id"=>432,
                "quote"=>["text"=>"The size of a crowd is not proportional to the value of the decision it's making", "citation"=>"Eddie Pinero"], 
                "weather"=>[[["Feels Like"=>[85,"image.png"]],["6AM"=>[87,90,"image.png"]],["9AM"=>[85,88,"image.png"]],
                            ["12PM"=>[83,86,"image.png"]], ["3PM"=>[85,88,"image.png"]], ["6PM"=>[84,87,"image.png"]]],
                            [["Today"=>[83,90,"image.png"]],["Tuesday"=>[76,88,"image.png"]],["Wednesday"=>[78,83,"image.png"]],
                            ["Thursday"=>[82,89,"image.png"]],["Friday"=>[79,85,"image.png"]]]],
                "agenda"=>[["today"=>[["4:45AM"=>"Thing 1"],["5:15AM"=>"Thing 2"],["7:00AM"=>"Thing 3"], ["7:30AM"=>"Thing 4"], 
                                    ["8:00AM"=>"Thing 5"], ["10:00AM"=>"Thing 6"], ["10:20AM"=>"Thing 7"], ["10:45AM"=>"Thing 8"], 
                                    ["11:10AM"=>"Thing 9"], ["11:30AM"=>"Thing 10"], ["11:50AM"=>"Thing 11"], ["12:15PM"=>"Thing 12"]]],
                            ["Tuesday"=>[["4:45AM"=>"Thing 1"],["5:15AM"=>"Thing 2"],["7:00AM"=>"Thing 3"]]],
                            ["Wednesday"=>[["4:45AM"=>"Thing 1"],["5:15AM"=>"Thing 2"],["7:00AM"=>"Thing 3"]]],
                            ["Thursday"=>[["4:45AM"=>"Thing 1"],["5:15AM"=>"Thing 2"],["7=:00AM"=>"Thing 3"]]]]];

// print_r($responseToClient); //from dataAggregation.php

print(json_encode([
    'success' => true,
    'data' => $responseToClient //from dataAggregation.php
]));
