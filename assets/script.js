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
