document.getElementById("getWeatherBtn").addEventListener("click", getWeather);

function getWeather() {
  const apiKey = "YOUR_API_KEY"; // Replace with your own OpenWeatherMap API key
  const city = "London";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then(data => {
      const weather = data.weather[0].main;
      document.getElementById("weatherData").innerText = `Current weather in ${city}: ${weather}`;
    })
    .catch(error => {
      console.error("Error fetching weather data:", error);
      document.getElementById("weatherData").innerText = "Failed to fetch weather data.";
    });
}
