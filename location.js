 navigator.geolocation.getCurrentPosition(function(position){
	var lat = position.coords.latitude ;
	var lng = position.coords.longitude;	
    new google.maps.Map(document.getElementById("map_1"), { // (JavaScript寫法)
    zoom: 20,
    center: new google.maps.LatLng( lat , lng ) // LatLng()建立經緯度的物件
	});
	});
