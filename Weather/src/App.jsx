import { useState } from 'react';
import "./App.css";

const mockWeatherData = {
  'New York': {
    temperature: '22°C',
    humidity: '56%',
    windSpeed: '15 km/h'
  },
  'Los Angeles': {
    temperature: '27°C',
    humidity: '45%',
    windSpeed: '10 km/h',
  },
  'London': {
    temperature: '15°C',
    humidity: '70%',
    windSpeed: '20 km/h'
  },
  'Paris': {
    temperature: '18°C',
    humidity: '61%',
    windSpeed: '25 km/h'
  },
};

function WeatherDashboard() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [history, setHistory] = useState([]);

  const searchCity = () => {
    if (mockWeatherData[city]) {
      setWeatherData(mockWeatherData[city]);
      if (!history.includes(city)) {
        setHistory([...history, city]);
      }
    } else {
      setWeatherData('City not found.');
    }
  };

  const showCityData = (city) => {
    setWeatherData(mockWeatherData[city]);
  };

  return (
    <div>
      <input 
        type="text" 
        id="citySearch" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        placeholder="Search for a city..." 
      />
      <button id="searchButton" onClick={searchCity}>Search</button>
      <div id="previousSearches">
        {history.map(
          (city) => (
            <button key={city} id="cityButton" onClick={() => showCityData(city)}>
              {city}
            </button>
          )
        )}
      </div>
      <div id="weatherData">
        {weatherData && typeof weatherData === 'object' ? (
          <>
            <div>Temperature: {weatherData.temperature}</div>
            <div>Humidity: {weatherData.humidity}</div>
            <div>Wind Speed: {weatherData.windSpeed}</div>
          </>
        ) : (
          <div>{weatherData}</div>
        )}
      </div>
    </div>
  );
}

export default WeatherDashboard;

