import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import WeatherInput from "./components/WeatherInput";
import WeatherDisplay from "./components/WeatherDisplay";
import "./App.css";

function App() {
  const [city, setCity] = useState("Gracanica");
  const [weather, setWeather] = useState(null);

  const apiKey = "272233ead62a9216ffa0ecdab0aadc84";

  const getWeather = useCallback(async () => {
    if (city) {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );
        setWeather(response.data);
      } catch {
        alert("City not found! Please try again.");
      }
    }
  }, [city, apiKey]);

  useEffect(() => {
    getWeather();
  }, [getWeather]);

  return (
    <div className="container">
      <h1>Weatherly</h1>
      <WeatherInput city={city} setCity={setCity} getWeather={getWeather} />
      <WeatherDisplay weather={weather} />
    </div>
  );
}

export default App;
