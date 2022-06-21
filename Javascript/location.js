if("geolocation" in navigator) {
    console.log('Location available!');
    navigator.geolocation.getCurrentPosition(function getLocation(position) {
        var location = ('Location: ' + position.coords.latitude + ' , ' + position.coords.longitude);
        console.log(location);
    });
}
else {
    console.log('Location unavailable.');
}