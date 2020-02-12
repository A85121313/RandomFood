<!DOCTYPE html>
<html>
	<head>
		<meta charset="urf-8">
		<title> Random Food</title>
		<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC2AcGg9-ZTvKKQz-76qcgq60lZRI7HSbU"></script>
		<style type="text/css">
            #map1{
				height : 300px;
				width : 400px;
			}
		</style>
	</head>
	
	<body text="white" bgcolor="black">
		<h1 align="center"> Jimmy's WHATTOEAT <h1>
		<section>
			<article>
				<h4> Current Location </h4>
				<div id="map1"></div>
				<script>
					navigator.geolocation.getCurrentPosition(function(position){
					var pc = position.coords;
					var lat = pc.latitude ;
					var lng = pc.longitude;
					var map = new google.maps.Map(document.getElementById("map1"), {
						center: new google.maps.LatLng(lat,lng),
						zoom: 12	 
						});
					});
				</script>
			</article>
		</section>
	</body>
</html>
