import React, { useState } from 'react';
import {
  Link,
  useLoaderData,
} from 'react-router-dom';
import axios from 'axios';

// loader functions take the place of a useEffect hook,
// loader functions have the advantage of loading information before the page loads

function HomePage() {
  const [weatherData] = useLoaderData();
  // weatherData = weatherData[0];
  // navlink lets you style active links
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello I Am HomePage
      </h1>
      <Link to="/weather" state={{ test: 'test' }}>
        <div>
          Weather
          <img src={weatherData.forecast[0].icon} alt="" />
          <p>
            {weatherData.forecast[0].shortForecast}
            {' '}
            {weatherData.forecast[0].temperature}
            {weatherData.forecast[0].temperatureUnit}
          </p>
        </div>
        <hr />
      </Link>
      <div>
        <Link to="/battery">
          Battery
          <p>
            99%
          </p>
        </Link>
      </div>
      <hr />
      <div>
        <Link to="/network">
          Network
          <p>
            48 Mbps ↓
          </p>
          <p>
            45 Mbps ↑
          </p>
        </Link>
      </div>
    </div>
  );
}
// test

export default HomePage;


/*
{
    "number": 1,
    "name": "This Afternoon",
    "startTime": "2023-01-11T12:00:00-06:00",
    "endTime": "2023-01-11T18:00:00-06:00",
    "isDaytime": true,
    "temperature": 82,
    "temperatureUnit": "F",
    "temperatureTrend": null,
    "windSpeed": "10 to 15 mph",
    "windDirection": "SSW",
    "icon": "https://api.weather.gov/icons/land/day/few?size=medium",
    "shortForecast": "Sunny",
    "detailedForecast": "Sunny, with a high near 82. South southwest wind 10 to 15 mph, with gusts as high as 25 mph."
}
*/