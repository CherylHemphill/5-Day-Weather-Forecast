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
   
 for(i=0; i<40; i+=8){ 
          //Min Temperature
    document.getElementById('day' +(i) +'Min').textContent = 'Min:' +Number(cityData.list[i].main.temp_min);
          day0Min.append(temp_min)
          
          day8Min.append(temp_min)
          day16Min.append(temp_min)
          day24Min.append(temp_min)
          day32Min.append(temp_min)
          //Max Temp
    document.getElementById('day' +(i) +'Max').innerHTML = 'Max:' +Number(cityData.list[i].main.temp_max);
          day0Max.append(temp_max)
          day8Max.append(temp_max)
          day16Max.append(temp_max)
          day24Max.append(temp_max)
          day32Max.append(temp_max)
          //Daily Icon
    document.getElementById('iconContainer').src='https://openweathermap.org/img/wn/'+ data.list[i].weather[0].icon+'.png';
        iconContainer[i].append(icon.png)
          
          // Humidity
    document.getElementById('humidity + (i)').innerHTML = 'Humidity:' + Number(data.list[i].main.humidity);
         humidity0.append(humidity)
         humidity8.append(humidity)
         humidity16.append(humidity)
         humidity24.append(humidity)
         humidity32.append(humidity)
          //Wind speed
    document.getElementById('wind-speed + (i)').innerHTML = 'Wind Speed' +Number(data.list[i].wind.speed);
        wind-speed0.append(wind.speed)
        wind-speed8.append(wind.speed)
        wind-speed16.append(wind.speed)
        wind-speed24.append(wind.speed)
        wind-speed32.append(wind.speed)
  }
  
  })


}
btn.addEventListener('click', citySearch)