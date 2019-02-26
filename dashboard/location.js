if ("geolocation" in navigator) {
    console.log('avilable');
} else {
    console.log('dead');
}

navigator.geolocation.getCurrentPosition(
    function(position){
        console.log(position);
    });

