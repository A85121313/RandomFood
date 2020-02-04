navigator.geolocation.getCurrentPosition(function(position){
	var longitude = position.coords.longitude;
	var latitude = position.coords.latitude;
}, error)