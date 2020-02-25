<html>
	<head>
		<title> My website.</title>
		<meta http-equiv="utf-8">
		<script src="location.js">
		</script>
		<script language="javascript">
			if(!("geolocation" in navigator)){
				alert("瀏覽器不支援分享地理位置喔！");
			}
		</script>
		<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC2AcGg9-ZTvKKQz-76qcgq60lZRI7HSbU"></script>
		<div id="map"></div>		
		<script src="location.js"></script>		
	</head>	
	<body text="white" bgcolor="black"> 
		<h1 align="center">Jimmy's foodcode<h1> <hr>
	<div class="left">
	<h4>Current Location</h4>
	<div id="currentmap" style="width:400px; height:300px"></div>
	</div>		

 	
