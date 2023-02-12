import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './home/HomePage';
import WeatherPage, { weatherLoader } from './weather/WeatherPage';
import BatteryPage, { batteryLoader } from './battery/BatteryPage';
import NetworkPage from './network/NetworkPage';
import PhotosPage from './photos/PhotosPage';
import HomeLayout from './layouts/HomeLayout';
import ErrorPage from '../ErrorPage';

// this is creating url routes for my webpage,
// By doing this with react-router it is redirecting the server call before it hits the server
// and serves the html content from the front end
// this has the advantage of being quicker
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'home',
        element: <HomePage />,
        errorElement: <ErrorPage />,
        loader: async () => (
          { weather: await weatherLoader(), battery: await batteryLoader() }
        ),
      },
      {
        path: 'weather',
        element: <WeatherPage />,
        errorElement: <ErrorPage />,
        loader: weatherLoader,
      },
      {
        path: 'battery',
        element: <BatteryPage />,
        errorElement: <ErrorPage />,
        loader: batteryLoader,
      },
      {
        path: 'network',
        element: <NetworkPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'photos',
        element: <PhotosPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
