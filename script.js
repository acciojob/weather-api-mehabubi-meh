document.getElementById("getWeatherBtn").addEventListener("click", getWeather);

function getWeather() {
  const apiKey = "b6907d289e10d714a6e88b30761fae22"; // Example API key from OpenWeatherMap demo (or use your own)
  const city = "London";

  fetch(`https://openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const weather = data.weather[0].main;
      document.getElementById("weatherData").innerText = `Current weather in ${city}: ${weather}`;
    })
    .catch(error => {
      console.error("Error fetching weather data:", error);
      document.getElementById("weatherData").innerText = "Failed to fetch weather data.";
    });
}
