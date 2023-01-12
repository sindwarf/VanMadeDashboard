import React from 'react';
import axios from 'axios';
import {
  useLoaderData,
} from 'react-router-dom';

function WeatherPage() {
  const weatherData = useLoaderData();
  return (
    <div className=" h-screen">
      <div className="flex ml-20 mr-20 mt-10 rounded-[22px] h-1/4 bg-green">
        {weatherData.forecast.map((forecast, i) => {
          if (i < 2) {
            return (
              <div key={i} className="rounded-[22px] flex flex-1 p-2 items-center">
                <img src={forecast.icon} alt="" className="flex flex-[.25_1_0%] p-2" />
                <div className="flex flex-col flex-1">
                  <div className=" font-bold text-1xl">
                    {forecast.name}
                  </div>
                  <div>
                    {forecast.detailedForecast}
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="flex ml-20 mr-20 mt-10 rounded-[22px] h-1/4 bg-green flex-wrap">
        {weatherData.forecast.map((forecast, i) => {
          if (i >= 2 && i < 6) {
            return (
              <div key={i} className="rounded-[22px] flex flex-1 p-2 items-center">
                <img src={forecast.icon} alt="" className="flex flex-[.25_1_0%] p-2" />
                <div className="flex flex-col flex-1">
                  <div className=" font-bold text-1xl min-w-max">
                    {forecast.name}
                  </div>
                  <div>
                    {forecast.detailedForecast}
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="flex ml-20 mr-20 mt-10 rounded-[22px] h-1/4 bg-green">
        {weatherData.forecast.map((forecast, i) => {
          if (i >= 6 && i < 10) {
            return (
              <div key={i} className="rounded-[22px] flex flex-1 p-2 items-center">
                <img src={forecast.icon} alt="" className="flex flex-[.25_1_0%] p-5" />
                <div className="flex flex-col flex-1">
                  <div className=" font-bold text-1xl">
                    {forecast.name}
                  </div>
                  <div>
                    {forecast.detailedForecast}
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
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
