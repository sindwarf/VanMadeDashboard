import React from 'react';
import HomePage from './home/HomePage';
import WeatherPage from './weather/WeatherPage';
import BatteryPage from './battery/BatteryPage';
import PhotosPage from './photos/PhotosPage';

function App() {
  return (
    <div>
      <HomePage />
      <WeatherPage />
      <BatteryPage />
      <PhotosPage />
    </div>
  );
}

export default App;
