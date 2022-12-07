let city = document.getElementById("#searchInput");
const apiKey = "af8c0e09a40b33c06d1a2e8bc5aa9cd0"

function fetchWeather(city){
  
  fetch("https://api.openweathermap.org/data/2.5/weather?q=denver&appid=" + apiKey
  )

  .then(response => response.json())
  .then ((data) =>  console.log(data.coord.lat,))
  // console.log(data))
 
  // function displayingWeather(data)
}

fetchWeather()



// let day1 = document.querySelector("#day1");
// let day2 = document.querySelector("#day2");
// let day3 = document.querySelector("#day3");
// let day4 = document.querySelector("#day4");
// let day5 = document.querySelector("#day5");
console.log("what the heck");


// currentDate = moment().format("MM/DD/YYYY")
// function dateEL() {

//   let date = document.getElementById('date')
//   date.textContent = ("Date: " + `${currentDate}` );
// }
// dateEL();

// function getCity() {
//   let inputText = document.getElementById("searchInput").value;
//   console.log(inputText)
//   e.preventdefault();
//   let citySearch = inputText;
//   if (!citySearch) {
//     return;
//   }
// }

// // const citySearch = document.querySelector
// const searchBtn = document.querySelector("#searchBtn");

// const apiKey = "af8c0e09a40b33c06d1a2e8bc5aa9cd0";

// // weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=af8c0e09a40b33c06d1a2e8bc5aa9cd0"

// // function searchHistory() {
// //   let storedCities = json.parse(localeStorage.getItem("storedCities"));
// //   console.log(storedCities);
// // }
// // if (searchHistory == null) {
// //   console.log("oof need help");
// //   alert("Fix me!");
// //   // return;
// // } else {
// //   for (let i = 0; i < searchHistory.length; i++) {
// //     searchHistorybtn(searchHistory[i]);
// //   }
// // }

// // function storedSearchedCity(e){
// //   event.preventDefault();
// //   const seachedCity =
// // }

// function locationSearch(citySearch) {
//   let requestUrl =
//     "https://api.openweathermap.org/geo/1.0/direct?q=denver&limit=1&appid=af8c0e09a40b33c06d1a2e8bc5aa9cd0";
//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       //creating the variable for citydata and saving it to local storage
//       let cityData = data[0].name
//       const lat = data[0].lat;
//       const lon = data[0].lon;
//       console.log(cityData);
//       //putting the data in a function for later use
//       weatherData(lat, lon, cityData);
//     });
// }

// function getData(lat, lon, cityData) {
//   requestUrl2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly&units=imperial&appid=af8c0e09a40b33c06d1a2e8bc5aa9cd0";
//   fetch(requestUrl2)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (info) {
//       console.log(info);
//       console.log(cityData)
//       const icon = info.current.weather[0].icon;
//       const temp = info.current.temp;
//       const wind = info.current.wind_speed;
//       const humidity = info.current.humidity;
//       const uvi = info.current.uvi;
//       console.log(icon, description, temp, humidity, wind, uvi);

//       let dayOne = data.daily[1];
//       let dayTwo = data.daily[2];
//       let dayThree = data.daily[3];
//       let dayFour = data.daily[4];
//       let dayFive = data.daily[5];
//     });
// }
