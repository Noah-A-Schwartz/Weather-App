document.forms[0].onsubmit = getWeatherCity;

async function getWeatherCity() {
    try {
        let form = document.forms[0];
        let city = form[0].value;
        let element = document.getElementById("weather");
        let key = "249607106b0cfa8d5d5a26a0ef539b09";
        let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        element.innerText = data;
    }
    catch (err) {
        console.log(err);
    }
}

