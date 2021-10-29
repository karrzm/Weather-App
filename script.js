//Search for city

function citySearch(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let h1 = document.querySelector("#city");
  h1.innerHTML = `${cityInput.value}`;

  let city = cityInput.value;
  let apiKey = "4f7af84cb966fae648af6c5241bc62a5";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  axios.get(apiURL).then(temperatureApi);
}

let searchForm = document.querySelector("#search-bar");
searchForm.addEventListener("submit", citySearch);

//Temperature

function temperatureApi(response) {
  let temperature = document.querySelector(".current-temp");
  let cityTemperature = Math.round(response.data.main.temp);
  temperature.innerHTML = `${cityTemperature}°C`;
}

//Geolocation
function currentPosition(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let unit = "metric";
  let apiKey = "4f7af84cb966fae648af6c5241bc62a5";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=${unit}`;

  axios.get(apiURL).then(temperatureApi);
}

function currentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(currentPosition);
}

let positionButton = document.querySelector("#button");
positionButton.addEventListener("click", currentLocation);

// Curent date and time
let current = new Date();

function showDate() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[current.getDay()];
  let currentHours = current.getHours();
  if (currentHours < 10) {
    currentHours = `0${currentHours}`;
  }
  let currentMinutes = current.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }
  return `${currentDay}, ${currentHours}:${currentMinutes}`;
}

let date = document.querySelector("#calendar");
date.innerHTML = showDate();

//Convert unit

function tempF(event) {
  event.preventDefault();
  temperature.innerHTML = "☀ 77F";
}
function tempC(event) {
  event.preventDefault();
  temperature.innerHTML = "25C";
}
let temperature = document.querySelector(".current-temp");
let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", tempC);

let farenheit = document.querySelector("#farenheit");
farenheit.addEventListener("click", tempF);
