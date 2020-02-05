 navigator.geolocation.getCurrentPosition(function(position){
	var lat = position.coords.latitude ;
	var lng = position.coords.longitude;	
	new google.maps.Map(document.getElementById("map"),{
   		zoom: 20,
   		center: new google.maps.LatLng( lat , lng )
		});
	});
