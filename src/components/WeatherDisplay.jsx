const WeatherDisplay = ({ weather }) => {
  return (
    weather && (
      <div className="weather-display">
        <h2>{weather.name}</h2>
        <p>Temperature: {weather.main.temp}°C</p>
        <p>Condition: {weather.weather[0].description}</p>
      </div>
    )
  );
};

export default WeatherDisplay;
