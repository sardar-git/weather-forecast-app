
const apiKey = "7de650f04e66cd08f13da86647a517ee";

const cityInput = document.getElementById("cityInput");

cityInput.addEventListener("keypress", function(event) {

  if (event.key === "Enter") {
    getWeather();
  }
});

async function getWeather() {

  const city = cityInput.value.trim();

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    document.getElementById("cityName").innerText =
      data.name;

    document.getElementById("temperature").innerText =
      `Temperature: ${data.main.temp}°C`;

    document.getElementById("description").innerText =
      `Weather: ${data.weather[0].description}`;

    document.getElementById("humidity").innerText =
      `Humidity: ${data.main.humidity}%`;

    document.getElementById("wind").innerText =
      `Wind Speed: ${data.wind.speed} km/h`;

  } catch (error) {

    alert(error.message);
  }
}
