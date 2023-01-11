import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import HomePage, { homeLoader } from './home/HomePage';
import WeatherPage from './weather/WeatherPage';
import BatteryPage from './battery/BatteryPage';
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
        loader: homeLoader,
      },
      {
        path: 'weather',
        element: <WeatherPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'battery',
        element: <BatteryPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'network',
        element: <PhotosPage />,
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
