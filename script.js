//your JS code here. If required.
document.getElementById("getWeatherBtn").addEventListener("click", getWeather);

function getWeather() {
  const apiKey = "YOUR_API_KEY_HERE"; // Replace this with your OpenWeatherMap API key
  const city = "London";

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
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
