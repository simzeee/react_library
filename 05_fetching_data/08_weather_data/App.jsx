import { useEffect, useState } from "react";

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchWeatherData = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://api.react-formula.com/learning-api/demos/weather-forecast/weather"
    );

    const data = await response.json();
    setWeatherData(data);
    setIsLoading(false);
  };

  console.log(weatherData);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <div className="flex justify-center min-h-screen">
      <button
        onClick={fetchWeatherData}
        className="text-xl text-orange-500 bg-orange-100 px-4 py-2 rounded-md absolute top-4 right-4"
      >
        <i className="fa-solid fa-rotate-right" />
      </button>
      <div className="w-full max-w-2xl flex justify-center items-center">
        {isLoading && (
          <div>
            <i className="fa-solid fa-spinner animate-spin text-2xl text-orange-500" />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
