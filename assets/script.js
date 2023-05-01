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
  tempOfCity.textContent = Math.round((cityData.main.temp - 273.15) * 9 / 5 + 32) + "\xB0" + "F";
 currentContainer.append(tempOfCity)

 for(i=0; i<40; i+=8){ //Min Temperature
    document.getElementById('day' +(i) +'Min').innerHTML = 'Min:' +Number(cityData.list[i].main.temp_min);
    document.getElementById('day' +(i) +'Max').innerHTML = 'Max:' +Number(cityData.list[i].main.temp_max);
   
    // let minTemp = Math.round((cityData.main.temp_min - 273.15) * 9 / 5 + 32) + "\xB0" + "F";
    // day[i]Min.append(minTemp)
    }
    for(i=0; i<5; i++){  //Max Temperature
   
    // let maxTemp = Math.round((cityData.list[i].main.temp_max - 273.15) * 9 / 5 + 32) + "\xB0" + "F";
    // day[i]Max.append(MaxTemp)
    }
    for(i=0; i<5; i++){    //Icon for Condition
        document.getElementById('iconContainer').src='https://openweathermap.org/img/wn/'+ data.list[i].weather[0].icon+'.png';
        iconContainer[i].append(icon)
    }
    for (i=0; i<5; i++){   //Humidity
      document.getElementById('humidity').innerHTML = 'Humidity:' + Number(data.list[i].main.humidity);
    }
    for (i=0; i<5; i++){  //Wind speed
      document.getElementById('wind-speed').innerHTML = 'Wind Speed' +Number(data.list[i].wind.speed);
    }
  })


}
btn.addEventListener('click', citySearch)