// Activate Search Button
// Link search button to location API
// Set searched loctions to local storage
// Display current forecast
// Display 5 day forecast

let cityInput = document.getElementById('search');
let btn = document.getElementById('submit-search');
let currentContainer = document.getElementById('current-container');
let forecast = document.getElementById('five-day');
var currentDate = moment().format('dddd, MMMM Do, YYYY')

let historyLocation =document.getElementById('history');
let cities =[];

function citySearch(e) {
  e.preventDefault();
  let cityValue = cityInput.value;

  // Add city to cities array only if it doesn't already exist
  if (!cities.includes(cityValue)) {
    cities.push(cityValue);
    localStorage.setItem('cities', JSON.stringify(cities));
  }

  fetchCityData(cityValue);
}

function renderCityList() {
  // Retrieve saved cities from local storage
  let savedCities = JSON.parse(localStorage.getItem('cities')) || [];

  // Loop through saved cities and create clickable city names
  for (let i = 0; i < savedCities.length; i++) {
    let city = savedCities[i];
    let cityLink = document.createElement('a');
    cityLink.setAttribute('href', '#');
    cityLink.textContent = city;
    cityLink.addEventListener('click', function(e) {
      e.preventDefault();
      fetchCityData(city);
    });
    let listItem = document.createElement('li');
    listItem.appendChild(cityLink);
    historyLocation.appendChild(listItem);
  }
}




function fetchCityData(cityName){
  let apiKey = '51e134b64a886c4af2649caf80c493b5'
  let requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial&appid=' + apiKey




  //start fetch request
  fetch(requestUrl) 
  .then(function(response){
    return response.json()
  })
  .then(function(cityData){
    console.log('cityWeatherData', cityData)
    let nameOfCity = document.createElement('h2')
    nameOfCity.textContent = cityData.name + ' ' + currentDate
    currentContainer.append(nameOfCity)
     
  let tempOfCity = document.createElement('h3')
   tempOfCity.textContent = currentContainer.append(cityData.main.temp)
   
   let lat = cityData.coord.lat
   let lon = cityData.coord.lon
 

    //  let forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=51e134b64a886c4af2649caf80c493b5&units=imperial'
    var forecastURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude={part}&appid=f30dc0b71f772a037a522282770190be&units=imperial";
     
     fetch(forecastURL)
     .then(function(response){
       return response.json()
     })
     .then(function(forecastData){
      console.log(forecastURL)
       console.log('weatherForecast', forecastData)
     
    

     


             //Min Temperature
            
      document.getElementById('day0Min').textContent = 'Min: ' + parseInt(forecastData.daily[0].temp.min.toFixed(0));
      document.getElementById('day1Min').textContent = 'Min: ' + parseInt(forecastData.daily[1].temp.min.toFixed(0));     
      document.getElementById('day2Min').textContent = 'Min: ' + parseInt(forecastData.daily[2].temp.min.toFixed(0)); 
      document.getElementById('day3Min').textContent = 'Min: ' + parseInt(forecastData.daily[3].temp.min.toFixed(0)); 
      document.getElementById('day4Min').textContent = 'Min: ' + parseInt(forecastData.daily[4].temp.min.toFixed(0)); 
      
      

             //Max Temp
             document.getElementById('day0Max').textContent = 'Max: ' + parseInt(forecastData.daily[0].temp.max.toFixed(0));
             document.getElementById('day1Max').textContent = 'Max: ' + parseInt(forecastData.daily[1].temp.max.toFixed(0));
             document.getElementById('day2Max').textContent = 'Max: ' + parseInt(forecastData.daily[2].temp.max.toFixed(0));
             document.getElementById('day3Max').textContent = 'Max: ' + parseInt(forecastData.daily[3].temp.max.toFixed(0));
             document.getElementById('day4Max').textContent = 'Max: ' + parseInt(forecastData.daily[4].temp.max.toFixed(0));
             
             //Daily Icon
  // Loop through each day's weather forecast and display the icon
  for (let i = 0; i < 5; i++) {
    let iconCode = forecastData.daily[i].weather[0].icon;
    let iconURL = "https://openweathermap.org/img/w/" + iconCode + ".png";
    let iconImg = document.createElement('img');
    iconImg.setAttribute('src', iconURL);
    iconImg.setAttribute('alt', forecastData.daily[i].weather[0].description);
    // Append the icon to the HTML element
    document.getElementById('day' + i + 'Icon').appendChild(iconImg);
  }
  
             // Humidity
 
  // Loop through each day's weather forecast and display the humidity
  for (let i = 0; i < 5; i++) {
    let humidity = forecastData.daily[i].humidity;
    document.getElementById('day' + i + 'Humidity').textContent = 'Humidity: ' + humidity + '%';
  }


             //Wind speed
       for (let i=0; i < 5; i++) {
        let wind = forecastData.daily[i].wind_speed;
        document.getElementById('day' + i + 'Wind').textContent = 'Wind: ' + wind + 'mph';
       }
   
     
     }
     )
   }
  
  )
   

}
btn.addEventListener('click', citySearch)

renderCityList();
