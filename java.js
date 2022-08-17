let city = document.getElementById("city-search");

function getCity() {
  let inputText = document.getElementById("city-search").value;
  let citySearch = inputText;
  if (!citySearch) {
    return;
  }
}

// const citySearch = document.querySelector
const searchBtn = document.querySelector;

const apiKey = "af8c0e09a40b33c06d1a2e8bc5aa9cd0";

// weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=af8c0e09a40b33c06d1a2e8bc5aa9cd0"

function searchHistory(){
  storedCities = json.parse(localeStorage.getItem("storedCities"));
  console.log(storedCities)
}if (storedCities == null){
  console.log("oof need help")
  alert("Fix me!")
  return;
}else {
  for (var i = 0; i < storedCities )
}


function storedSearchedCity(e){
  event.preventDefault();
  var sto
}



function locationSearch(citySearch) {
  let requestUrl =
    "https://api.openweathermap.org/geo/1.0/direct?q=" +
    citySearch +
    "&limit=1&appid=" +
    apiKey;
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //creating the variable for citydata and saving it to local storage
      let cityData = data[0].name;
      saveToLocalStorage(cityData);
      const lat = data[0].lat;
      const lon = data[0].lon;
      //putting the data in a function for later use
      weatherData(lat, lon, cityData);
    });
}

function getData(citySearch) {
  requestUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    citySearch +
    "&appid=" +
    apiKey;
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      const icon = data.current.weather[0].icon;
      const temp = data.current.temp;
      const wind = data.current.wind_speed;
      const humidity = data.current.humidity;
      const uvi = data.current.uvi;
      console.log(icon, description, temp, humidity, wind, uvi);
    });
}
