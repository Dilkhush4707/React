import React, { useState, useEffect } from "react";

const Weather = () => {
  const [city, setCity] = useState("Alwar");
  const [weather, setWeather] = useState({ description: "", temp: 0, humidity: 0 });
  const [error, setError] = useState(null);
  const [intervalId, setIntervalId] = useState(0);

  const apiKey = "14ffc4c609e850b1a353657c43892c92"; // Replace with your API key

  const fetchWeather = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Weather data not found");
        }
        return response.json();
      })
      .then((data) => {
        setWeather({
          description: data.weather[0].description,
          temp: data.main.temp,
          humidity: data.main.humidity,
        });
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setWeather({ description: "", temp: 0, humidity: 0 });
      });
  };

  const startAutoUpdate = () => {
    if (!intervalId) {
      const id = setInterval(fetchWeather, 30000); // Update every 30 seconds
      setIntervalId(id);
    }
  };

  const stopAutoUpdate = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(0);
    }
  };

  useEffect(() => {
    fetchWeather();
    return () => stopAutoUpdate(); // Cleanup on unmount
  }, []);

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 text-center">
      <h2 className="text-2xl font-bold">🌤️ Weather App</h2>
      <input
        type="text"
        className="border p-2 rounded w-full my-2"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded m-1" onClick={fetchWeather}>
        Get Weather
      </button>
      <button className="bg-green-500 text-white px-4 py-2 rounded m-1" onClick={startAutoUpdate}>
        Auto Update
      </button>
      <button className="bg-red-500 text-white px-4 py-2 rounded m-1" onClick={stopAutoUpdate}>
        Stop Updates
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {weather && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Weather in {city}</h3>
          <p>🌦 {weather.description}</p>
          <p>🌡 Temperature: {weather.temp}°C</p>
          <p>💧 Humidity: {weather.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
