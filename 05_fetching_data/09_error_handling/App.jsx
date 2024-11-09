import { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import ErrorMessage from "./ErrorMessage";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    setError(null);
    setWeather(null);
    const response = await fetch(
      "https://api.react-formula.com/learning-api/demos/error-handling/weather"
    );
    if (response.status === 200) {
      const weatherData = await response.json();
      setWeather(weatherData);
    } else {
      const errorData = await response.json();
      setError(errorData);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <div className="flex justify-center p-20">
      <button
        onClick={fetchWeatherData}
        className="absolute px-4 py-2 rounded-lg bg-fuchsia-200 text-fuchsia-700 hover:bg-fuchsia-300 top-2 left-2"
      >
        <i className="fa-solid fa-redo" />
      </button>
      {weather && <WeatherCard weather={weather}></WeatherCard>}
      {error && <ErrorMessage message={error}></ErrorMessage>}
    </div>
  );
};

export default App;
