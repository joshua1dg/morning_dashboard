window.onload = eventHandler;

if ("geolocation" in navigator) {
    console.log('avilable');
} else {
    console.log('dead');
}

navigator.geolocation.getCurrentPosition(
    function(position){
        console.log(position);
    });




function eventHandler(){
    const date = () => {
        const dateInfo = new Date();
        return dateInfo.toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });
        console.log(dateInfo.toLocaleDateString('en-us', { weekday: 'long' }));
        console.log(dateInfo.toLocaleDateString('en-us', { month: 'short', day: 'numeric' }));
    };
    console.log(date);
    document.getElementsByClassName("currentTime")[0].innerHTML = date();
}
