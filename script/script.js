

// need to set lat/lon based on zip code?
// let map;

// async function initMap() {
//   //@ts-ignore
//   const { Map } = await google.maps.importLibrary("maps");

//   map = new Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }

// initMap();
var map;
var service;
var infowindow;

function initMap() {
 var location = new google.maps.LatLng(-39.9526,75.1652);

map = new google.maps.Map(document.getElementById('map'), {
    center: location,
    zoom: 15
  });

var request = {
  location: location,
  radius: '50',
  type: ['liquor_store']
};

  var service = new google.maps.places.PlacesService(map);

  service.nearbySearch(request, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log(results)
    //   for (var i = 0; i < results.length; i++) {
    //     createMarker(results[i]);
    //   }
    //   map.setCenter(results[0].geometry.location);
    }
  });
}

// service.nearbySearch(request, callback);
