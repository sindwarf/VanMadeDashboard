import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import ErrorPage from './ErrorPage';
import './style.css';
import HomePage from './components/home/HomePage';
import WeatherPage from './components/weather/WeatherPage';
import BatteryPage from './components/battery/BatteryPage';
import PhotosPage from './components/photos/PhotosPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },

  {
    path: '/weatherPage',
    element: <WeatherPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/batteryPage',
    element: <BatteryPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/photosPage',
    element: <PhotosPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
