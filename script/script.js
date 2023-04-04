
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

    var request2 = {
        location: location,
        radius: '50',
        query: "brewery"
    };

    var service = new google.maps.places.PlacesService(map);

    service.textSearch(request, function (results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            console.log(results)


        }
    });

    service.textSearch(request2, function (results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            console.log(results)
        }
    })
}