import React from 'react';

function WeatherPage({ test }) {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello I Am WeatherPage
      {' '}
      { test }
    </h1>
  );
}

export default WeatherPage;
