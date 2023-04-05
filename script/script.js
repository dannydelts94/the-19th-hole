var map;
var service;
var infowindow;
var inputvalue;


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

// TODO: Event listener for submit button
$("#formSubmit").on("submit", function (event) {
  event.preventDefault();

  var zipCode = $("#zip").val();
  console.log(zipCode);
})
// adding variables to get the search. Save var needs to be updated


// todo: update save var, add classes in to code once Bulma CSS is done
const zipCode = document.querySelector('#zip')
var submitForm = document.querySelector('#formSubmit')
console.log(zipCode,submitForm);



// gets the data from the API based off zip code
submitForm.addEventListener('submit', function(event){
  event.preventDefault()
  var inputvalue= zipCode.value;
  console.log(inputvalue);
  fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+ inputvalue +'?key=BC56DV38KGW5TK327XDYHBPXD')
  .then(function(response){

   return response.json()
  }).then(function(data) {
   console.log(data)
  })
})

console.log(inputvalue)

// function getWeather(inputvalue) {
// console.log(data) 


// }

//   getWeather()
    
  
// searchButton.addEventListener('click', function (event) {
//   console.log(storedZip.value)
// getWeather(zipSearch.value)
// })