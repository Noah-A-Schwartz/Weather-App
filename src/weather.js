function showWeather(data){
    let weatherElements = document.getElementsByTagName("p");
    weatherElements[0].innerText = "Temp: " + farenToKelvin(data.main.temp) + "°F";
    weatherElements[1].innerText = "Feels Like: " + farenToKelvin(data.main.feels_like) + "°F";
    weatherElements[2].innerText = "High: " + farenToKelvin(data.main.temp_max) + "°F";
    weatherElements[3].innerText = "Low: " + farenToKelvin(data.main.temp_min) + "°F";
    weatherElements[4].innerText = "Humidity: " + data.main.humidity + "%"

}

function farenToKelvin(temp){
    console.log(temp);
    return Math.round((temp - 273.15) * (9/5) + 32);
}
export {showWeather}