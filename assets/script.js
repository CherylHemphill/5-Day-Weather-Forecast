// Activate Search Button
// Link search button to location API
// Set searched loctions to local storage
// Display current forecast
// Display 5 day forecast
let URLsearch = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}'


// $(document).ready(function(){ //defer JQuery until page loads

//     $("submit-search").click(function() 
//     {
//         fetch('URLseach')
//         .then(return => {
//             return Response.JSON();
//         });
//         })
    
// });     //End JQuery Deferral

$(document).ready(function() {
    $("#submit-search").click(function() {
        fetch('URLsearch')
        .then(response => {
            return response.json();
        })
        .then(data => {
            // Use the search results data here
        })
        .catch(error => {
            // Handle any errors that occur during the search
        });
    });
});

$(document).ready(function() {

  // Function to get weather data and update the UI
  function getWeather(lat, lon) {
    var apiKey = "YOUR_API_KEY";
    var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;

    $.ajax({
      url: apiUrl,
      method: "GET",
      dataType: "json",
      success: function(data) {
        // Parse the data and update the UI
        console.log(data);
        // TODO: update the UI with the weather data
      },
      error: function(xhr, status, error) {
        console.log("Error: " + error);
      }
    });
  }

  // Function to get the user's current location
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        getWeather(lat, lon);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  // Bind the search button click event
  $("#submit-search").on("click", function() {
    var location = $("#search").val();
    // TODO: use a geocoding API to get the latitude and longitude for the location
    // and call getWeather() with the latitude and longitude
  });

  // Get the user's current location and call getWeather()
  getLocation();
});


$(document).ready(function() {

    $("#submit-search").on("click", function() {
        getWeatherData();
      });

      function getWeatherData() {
        var cityName = $("#search").val();
        var APIKey = "YOUR_API_KEY";
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + APIKey;
        
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          console.log(response);
          // Parse the response data and display it on the webpage
        });
      }

      function getWeatherData() {
        var cityName = $("#search").val();
        var APIKey = "YOUR_API_KEY";
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + APIKey;
        
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          console.log(response);
          // Parse the response data and display it on the webpage
          $("#current-location h2").text(response.city.name);
          $("#day1").text("Day 1: " + response.list[0].main.temp);
          $("#day2").text("Day 2: " + response.list[1].main.temp);
          $("#day3").text("Day 3: " + response.list[2].main.temp);
          $("#day4").text("Day 4: " + response.list[3].main.temp);
          $("#day5").text("Day 5: " + response.list[4].main.temp);
        });
      }
      



});
