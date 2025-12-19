const apiKey = "aa36654420866b02dab1985b2ddd6b8a"; 

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
    const city = document.getElementById("cityInput").value;
    if (city) {
        getWeather(city);
    }
});

async function getWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if (data.cod === "404") {
            alert("City not found!");
            return;
        }

        document.getElementById("cityName").innerText = data.name;
        document.getElementById("temp").innerText = Math.round(data.main.temp) + "°C";
        document.getElementById("desc").innerText = data.weather[0].description;
    } catch (error) {
        console.log(error);
    }
}