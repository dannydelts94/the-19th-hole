
var map;
var service;
var infowindow;


// todo: setup latlng using input from user
function initMap() {
 var location = new google.maps.LatLng(39.9526, -75.1652);

map = new google.maps.Map(document.getElementById('map'), {
    center: location,
    zoom: 8
  });

var request = {
  location: location,
  radius: '50',
  query: "golf course"
};

  var service = new google.maps.places.PlacesService(map);

  service.textSearch(request, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log(results)

// todo: set markers based on search results
    //   for (var i = 0; i < results.length; i++) {
    //     createMarker(results[i]);
    //   }
    //   map.setCenter(results[0].geometry.location);
    }
  });
}