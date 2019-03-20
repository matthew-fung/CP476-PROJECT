// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
//var map, infoWindow;
var currentLat = null;
var currentLng = null;
var place = 'Wilfrid Laurier University'; // default location on start of map
var destination = null;
var current = null;
var markersArray = [];

function success(position) {
  var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
  ///////////////////////////////////////////////////// FIND CURRENT COORDINATES
  currentLat = pos.lat;
  currentLng = pos.lng;
  current = {lat: currentLat, lng: currentLng};
  //getCoordinates();
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}


function getCurrentLocation() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    alert("Location not found");
  }

}

function getCoordinates() {

  console.log(currentLat);
  console.log(currentLng);
  //initMap();
}

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

var map;
var service;
var infowindow;

function initMap() {
  var here = new google.maps.LatLng(currentLat, currentLng);
  if(document.getElementById("qInput").value != "") {
    place = document.getElementById("qInput").value;
  }


  infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(
      document.getElementById('map'), {center: here, zoom: 15});

  // when user clicks map, a marker will be placed
  google.maps.event.addListener(map, 'click', function(event) {
       placeMarker(event.latLng);
  });

  // lol change this ///////////////////////////////////////////////////////////////////////////////////////////////////////

  var request = {
    query: place,
    fields: ['name', 'geometry'],
  };

  service = new google.maps.places.PlacesService(map);

  service.findPlaceFromQuery(request, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);

      }

      map.setCenter(results[0].geometry.location);
      //////////////////////////////////////////////////////// FOUND DESINATION COORDINATES
      destination = {
        lat: results[0].geometry.location.lat(),
        lng: results[0].geometry.location.lng()
      };


    }
  });
}

// automatically generate marker
function createMarker(place) {
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });
  markersArray.push(marker);
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
  google.maps.event.addListener(marker,"dblclick", function() {
      deleteMarker(marker);
  });

  destination = place.geometry.location;
  console.log(markersArray);

}


function placeMarker(location) {
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });

    markersArray.push(marker);
    // info on click
    // google.maps.event.addListener(marker, 'click', function() {
    //   infowindow.setContent(place.name);
    //   infowindow.open(map, this);
    //
    //   // set destinationA
    //
    // });

    destination = location;

    google.maps.event.addListener(marker,"dblclick", function() {
        deleteMarker(marker);
    })

    console.log(markersArray);


}

function deleteMarker(marker) {
  for(var i = 0; i < markersArray.length; i++) {

    if(markersArray[i] == marker) {
      markersArray.splice(i, 1);
    }
  }
  marker.setMap(null);
  marker = null;
  console.log(markersArray);
}

// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: -34.397, lng: 150.644},
//     zoom: 6
//   });
//   infoWindow = new google.maps.InfoWindow;
//
//   // Try HTML5 geolocation.
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       var pos = {
//         lat: position.coords.latitude,
//         lng: position.coords.longitude
//       };
//
//       infoWindow.setPosition(pos);
//       infoWindow.setContent('Location found.');
//       infoWindow.open(map);
//       map.setCenter(pos);
//     }, function() {
//       handleLocationError(true, infoWindow, map.getCenter());
//     });
//   } else {
//     // Browser doesn't support Geolocation
//     handleLocationError(false, infoWindow, map.getCenter());
//   }
// }
//
// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//   infoWindow.setPosition(pos);
//   infoWindow.setContent(browserHasGeolocation ?
//                         'Error: The Geolocation service failed.' :
//                         'Error: Your browser doesn\'t support geolocation.');
//   infoWindow.open(map);
// }
