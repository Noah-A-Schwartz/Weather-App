import { showWeather } from "./weather.js";



document.forms[0].addEventListener("submit", (e) =>{
    e.preventDefault()
  });

document.getElementById("search-btn").addEventListener("click", getWeatherCity);

let city = "atlanta";
getDefaultWeatherCity(city)


async function getWeatherCity() {
    try {
        let city = document.getElementById("city-input").value;
        let key = "249607106b0cfa8d5d5a26a0ef539b09";
        let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        showWeather(data);
    }
    catch (err) {
        console.log(err);
    }
    
}
async function getDefaultWeatherCity(city) {
    try {
        let key = "249607106b0cfa8d5d5a26a0ef539b09";
        let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        showWeather(data);
    }
    catch (err) {
        console.log(err);
    }
    
}




