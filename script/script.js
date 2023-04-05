var map;
var service;
var infowindow;
// var APIKeyGoogle = "AIzaSyCfEbgTYj5gyLq7womR6gc4xBQxDa3moZE";
var APIKeyWeather = "383165bf31a4af053f333f929519989c";


// TODO: Event listener for submit button
$("#formSubmit").on("submit", function (event) {
    event.preventDefault();

    var zipCode = $("#zip").val();
    getCoord(zipCode);
    console.log(zipCode);
})



// TODO: Get lat/lon from zipcode
function getCoord(zipCode) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&limit=5&appid=${APIKeyWeather}`)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);
            var lat = data.coord.lat;
            var lon = data.coord.lon;
            console.log(lat, lon);
            // currentWeather(lat, lon);
            // forecastWeather(lat,lon);

            initMap(lat, lon);

        })
}



//  map information
function initMap(lat, lon) {
    var location = new google.maps.LatLng(lat, lon);

    map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 8
    });

    var request = {
        location: location,
        // input field for radius
        radius: '50',
        query: "golf course"
    };

    var request2 = {
        location: location,
        radius: '50',
        query: "brewery"
    };

    var service = new google.maps.places.PlacesService(map);

    // Array for Golf Courses
    service.textSearch(request, function (results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            console.log(results)

        //     // TODO: ADD FOR LOOP
        //     for (request i = 0; i < 5; i++) {
        //         results = results * i;
        //     }

        }
    });

    // Array for breweries
    service.textSearch(request2, function (results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            console.log(results)
            // TODO: ADD FOR LOOP - max 5
        }

    })
}


