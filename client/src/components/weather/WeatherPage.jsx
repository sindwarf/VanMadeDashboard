import React from 'react';
import axios from 'axios';
import {
  useLoaderData,
} from 'react-router-dom';

function WeatherPage() {
  const [weatherData] = useLoaderData();
  console.log('weather data', weatherData);
  return (
    <h1 className="text-3xl font-bold underline">
      The forecast is
      {' '}
      {weatherData.forecast.map((forecast, i) => (
        <div key={i}>
          <img src={forecast.icon} alt="" />
          {forecast.name}
          {forecast.detailedForecast}
          <p>
            {forecast.temperature}
            {forecast.temperatureUnit}
          </p>
          Wind speed:
          {' '}
          {forecast.windSpeed}
        </div>
      ))}
    </h1>
  );
}

export default WeatherPage;

export const weatherLoader = () => (
  axios.get('http://localhost:3000/api/weather')
    .then((response) => {
      console.log('weather response: ', response);
      return response.data;
    })
    .catch((err) => {
      console.log('ERROR: ', err);
      return err.message;
    })
);
