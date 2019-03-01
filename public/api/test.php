<?php
require_once('dataAggregation.php');

$infoToSend = ["user_id"=>432,"quote"=>"The size of a crowd is now proportional to the value of the decision it's making","weather"=>[[["Feels Like"=>[85,"image.png"]],["6AM"=>[87,90,"image.png"]],["9AM"=>[85,88,"image.png"]],["12PM"=>[83,86,"image.png"]]],[["Today"=>[83,90,"image.png"]],["Tuesday"=>[76,88,"image.png"]],["Wednesday"=>[78,83,"image.png"]],["Thursday"=>[82,89,"image.png"]],["Friday"=>[79,85,"image.png"]]]],"agenda"=>[["today"=>[["4:45AM"=>"Thing 1"],["5:15AM"=>"Thing 2"],["7:00AM"=>"Thing 3"]]],["Tuesday"=>[["4:45AM"=>"Thing 1"],["5:15AM"=>"Thing 2"],["7:00AM"=>"Thing 3"]]],["Wednesday"=>[["4:45AM"=>"Thing 1"],["5:15AM"=>"Thing 2"],["7:00AM"=>"Thing 3"]]],["Thursday"=>[["4:45AM"=>"Thing 1"],["5:15AM"=>"Thing 2"],["7=:00AM"=>"Thing 3"]]]]];
print(json_encode([
    'success' => true,
    'data' => $infoToSend
]));
