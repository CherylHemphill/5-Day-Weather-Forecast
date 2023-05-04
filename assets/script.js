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


function citySearch(e){
  e.preventDefault()
  let cityValue = cityInput.value
  fetchCityData(cityValue)
  // fetchCityForecast(cityValue)
  // makeCityHistory(cityValue)
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
  //  function fetchCityForecast(cityName){ var requestUv = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude={part}&appid=f30dc0b71f772a037a522282770190be";

    //  let forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=51e134b64a886c4af2649caf80c493b5&units=imperial'
    var forecastURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude={part}&appid=f30dc0b71f772a037a522282770190be&units=imperial";
     
     fetch(forecastURL)
     .then(function(response){
       return response.json()
     })
     .then(function(forecastData){
      console.log(forecastURL)
       console.log('weatherForecast', forecastData)
     
   
   
    for(i=0; i<5; i++){ 
             //Min Temperature
            //  let day0 =document.createElement('h1')
            //  day0.textContent = forecastData.list[1].main.temp_min
      //  document.getElementById('day' +(i) +'Min').textContent = 'Min:' +Number(forecastData.list[i].main.temp_min);
       let temp_min = Number(forecastData.daily[i].temp.min)
       document.getElementById('day0Min').textContent = 'Min:' +Number(forecastData.daily[0].temp.min);
           day0Min.append(temp_min) 
      document.getElementById('day1Min').textContent = 'Min:' +Number(forecastData.daily[1].temp.min);     
             day1Min.append(temp_min)
      document.getElementById('day2Min').textContent = 'Min:' +Number(forecastData.daily[2].temp.min); 
             day2Min.append(temp_min)
      document.getElementById('day3Min').textContent = 'Min:' +Number(forecastData.daily[3].temp.min); 
             day3Min.append(temp_min)
      document.getElementById('day4Min').textContent = 'Min:' +Number(forecastData.daily[4].temp.min); 
             day4Min.append(temp_min)

             //Max Temp
             let temp_max = Number(forecastData.daily[i].temp.max)
      document.getElementById('day0Max').textContent = 'Max:' +Number(forecastData.daily[0].temp.max); 
           day0Max.append(temp_max)
     document.getElementById('day1Max').textContent = 'Max:' +Number(forecastData.daily[1].temp.max);      
             day1Max.append(temp_max)
      document.getElementById('day2Max').textContent = 'Max:' +Number(forecastData.daily[2].temp.max);
             day2Max.append(temp_max)
      document.getElementById('day3Max').textContent = 'Max:' +Number(forecastData.daily[3].temp.max);
             day3Max.append(temp_max)
      document.getElementById('day4Max').textContent = 'Max:' +Number(forecastData.daily[4].temp.max);
             day4Max.append(temp_max)
             
             //Daily Icon
       document.getElementById('iconContainer').src='https://openweathermap.org/img/wn/'+ forecastData.list[i].weather[0].icon+'.png';
           iconContainer[i].append(icon.png)
             
             // Humidity
       document.getElementById('humidity + (i)').innerHTML = 'Humidity:' + Number(forecastData.list[i].main.humidity);
            humidity0.append(humidity)
            humidity8.append(humidity)
            humidity16.append(humidity)
            humidity24.append(humidity)
            humidity32.append(humidity)
             //Wind speed
       document.getElementById('wind-speed + (i)').innerHTML = 'Wind Speed' +Number(forecastData.list[i].wind.speed);
           wind-speed0.append(wind.speed)
           wind-speed8.append(wind.speed)
           wind-speed16.append(wind.speed)
           wind-speed24.append(wind.speed)
           wind-speed32.append(wind.speed)
     }
     
     })
   }
  //  }
  )
   
// API for Forecast



}
btn.addEventListener('click', citySearch)