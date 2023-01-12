import React, { useState } from 'react';
import {
  Link,
  useLoaderData,
} from 'react-router-dom';

// loader functions take the place of a useEffect hook,
// loader functions have the advantage of loading information before the page loads

function HomePage() {
  const loaderData = useLoaderData();
  console.log('loaderData', loaderData);
  const weatherData = loaderData.weather;
  const batteryData = loaderData.battery[0];
  // weatherData = weatherData[0];
  // navlink lets you style active links
  return (
    <div className=" bg-slate-500 flex flex-col min-h-screen p-10 ">
      <div className=" mt-1 m-5 flex flex-1 justify-center text-2xl">
        <Link to="/weather" className=" bg-green w-80  hover:bg-light-green  rounded-[22px] flex flex-col justify-between items-center p-6">
          Weather
          <img src={weatherData.forecast[0].icon} className="w-40 h-40" alt="" />
          <p>
            {weatherData.forecast[0].shortForecast}
            {' '}
            {weatherData.forecast[0].temperature}
            {weatherData.forecast[0].temperatureUnit}
          </p>
        </Link>
      </div>
      <div className=" m-5 flex flex-1 justify-center text-2xl">
        <Link className=" bg-green w-80 fo hover:bg-light-green rounded-[22px] flex flex-col justify-between items-center p-6" to="/battery">
          Battery
          <img src="/carBattery.png" className=" w-40 h-40 " alt="" />
          <p>
            {batteryData.soc}
            %
          </p>
        </Link>
      </div>
      <div className="m-5 flex flex-1 justify-center text-2xl">
        <Link className=" bg-green w-80 fo hover:bg-light-green rounded-[22px] flex flex-col justify-between items-center p-6" to="/network">
          Network
          <img src="/signal.png" className=" w-40 h-40 " alt="" />
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