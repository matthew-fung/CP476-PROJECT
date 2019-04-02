//const axios = require('axios');
var currentLat = null;
var currentLng = null;
var destLat = null;
var destLng = null;
var place = 'Wilfrid Laurier University'; // default location on start of map
var destination = null;
var current = null;
var address = null;
var markersArray = [];
var map;
var service;
var infowindow;

function success(position) {
  var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
  ///////////////////////////////////////////////////// FIND CURRENT COORDINATES
  currentLat = pos.lat;
  currentLng = pos.lng;
  current = {lat: currentLat, lng: currentLng};

  getCoordinates();
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
  // for debugging

  console.log("current: ");
  console.log(currentLat);
  console.log(currentLng);

  console.log("destination: ");
  console.log(destLat);
  console.log(destLng);

  //initMap();
}

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

function initMap() {
  markersArray = [];
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
       console.log('click');
  });


  var request = {
    query: place,
    fields: ['name', 'geometry'],
  };

  service = new google.maps.places.PlacesService(map);

  service.findPlaceFromQuery(request, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      createMarker(results[0]);

      map.setCenter(results[0].geometry.location);

      // destination coordinates. on first run, it will be wilfrid laurier university
      destLat = results[0].geometry.location.lat();
      destLng = results[0].geometry.location.lng();
      destination = {
        lat: destLat,
        lng: destLng
      };


    }
  });
}

// automatically generate marker
function createMarker(place) {
  // there can only be one destination, delete all from array
  address = place.name;
  for(var i = 0; markersArray.length; i++) {
    deleteMarker(markersArray[i]);
  }
  markersArray = [];

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

  // set destination
  destLat = place.geometry.location.lat();
  destLng = place.geometry.location.lng();
  destination = {
    lat: destLat,
    lng: destLng
  };
  getCoordinates();

}


function placeMarker(location) {
    for(var i = 0; markersArray.length; i++) {
      deleteMarker(markersArray[i]);
    }
    markersArray = [];
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });

    markersArray.push(marker);
    var geocoder = new google.maps.Geocoder;


    // lol idk if this works ahhahaepof'jaksdaj;akl
    geocoder.geocode({
      'latLng': location
    }, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[0]) {
          address = results[0].formatted_address;
        }
      }
    });

    // info on click
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(address);
      infowindow.open(map, this);
    });

    // set destination
    destLat = location.lat();
    destLng = location.lng();
    destination = {
      lat: destLat,
      lng: destLng
    };

    google.maps.event.addListener(marker,"dblclick", function() {
        deleteMarker(marker);
    })

    getCoordinates();


}

function deleteMarker(marker) {
  for(var i = 0; i < markersArray.length; i++) {

    if(markersArray[i] == marker) {
      markersArray.splice(i, 1);
    }
  }
  marker.setMap(null);
  marker = null;
  getCoordinates();

}

// USING AJAX
function getPriceEstimates() {
  // var estimateUrl = "https://api.uber.com/v1.2/estimates/price?start_latitude=" + current.lat + "&start_longitude=" + current.lng + "&end_latitude=" + destination.lat + "&end_longitude=" + destination.lng +"&server_token=mUPQ5llGBNjACxtz-MDzaMbLzcuhD7i8QNs8txkE";
  var priceObj;
  var estimateUrl = "https://api.uber.com/v1.2/estimates/price?start_latitude=" + current.lat + "&start_longitude=" + current.lng + "&end_latitude=" + destination.lat + "&end_longitude=" + destination.lng +"&server_token=mUPQ5llGBNjACxtz-MDzaMbLzcuhD7i8QNs8txkE";
  console.log(estimateUrl);
$.ajax({
          type: "GET",
          url: estimateUrl,
          dataType: 'jsonp',
          crossDomain: true,
          cache: false,
          contentType: "application/json; charset=utf-8",
          jsonpCallback: function(data) {
            console.log(data);
            priceObj = JSON.parse(data);
            console.log('priceObj: ' + priceObj);
          },
          jsonp: false,
          // success: function(data){
          //    console.log(data);
          // },
          // error: function(xhr, status, error) {
          //   console.log("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText);
          // }
      });
  // var data = '{"prices":[{"localized_display_name":"UberX","distance":1.7,"display_name":"UberX","product_id":"811c3224-5554-4d29-98ae-c4366882011f","high_estimate":3,"surge_multiplier":1.0,"minimum":2,"low_estimate":2,"duration":420,"estimate":"$2-3","currency_code":"USD"},{"localized_display_name":"Assist","distance":1.7,"display_name":"Assist","product_id":"9bb5e326-f5eb-4143-9153-18d880792db4","high_estimate":3,"surge_multiplier":1.0,"minimum":2,"low_estimate":2,"duration":420,"estimate":"$2-3","currency_code":"USD"},{"localized_display_name":"UberXL","distance":1.7,"display_name":"UberXL","product_id":"eb454d82-dcef-4d56-97ca-04cb11844ff2","high_estimate":4,"surge_multiplier":1.0,"minimum":3,"low_estimate":3,"duration":420,"estimate":"$3-4","currency_code":"USD"},{"localized_display_name":"Black","distance":1.7,"display_name":"Black","product_id":"ba49000c-3b04-4f54-8d50-f7ae0e20e867","high_estimate":6,"surge_multiplier":1.0,"minimum":4,"low_estimate":4,"duration":420,"estimate":"$4-6","currency_code":"USD"}]}';

  console.log(priceObj.prices);

  var main = document.querySelector("p");
  var priceButton = document.getElementById("getPriceButton");
  priceButton.parentNode.removeChild(priceButton);
  var mapElem = document.getElementById("map");
  mapElem.parentNode.removeChild(mapElem);
  var searchButton = document.getElementById("searchButton");
  searchButton.parentNode.removeChild(searchButton);
  var inputText = document.getElementById("qInput");
  inputText.parentNode.removeChild(inputText);

  var text = document.querySelector("main");
  document.getElementById("pText").innerHTML = "";

  document.querySelector(".resultsTitle").innerHTML = address;

  for(var i = 0; i < priceObj.prices.length; i++) {
    console.log(priceObj.prices[i]);
    var p = document.createElement('p');
    var node = document.createTextNode(priceObj.prices[i].display_name + ": " + priceObj.prices[i].estimate);
    p.appendChild(node);
    text.appendChild(p);
  }

  var requestUrl = 'https://m.uber.com/looking/finalize?pickup=[longitude]'+currentLng+ '[latitude]'+ currentLat + '&destination=[longitude]'+destLng+ ' [latitude]' + destLat;
  console.log(requestUrl);


}



//   $.getJSON("../js/response.json", function(json) {
//     console.log(json); // this will show the info it in firebug console
//   });
// }

// function getPriceEstimates(source, destination) {
//   $.get( apiUrl + 'estimates' )
//   .done(function(data){
//     console.log(data);
//   })
//   .fail(function(err){
//     console.error(err.status, err.responseText);
//   });
// }
//



// FOR UBER API REQUESTS, USE AXIOS AND HAVE THE UBER API URL AND QUERY
