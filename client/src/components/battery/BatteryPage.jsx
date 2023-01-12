import React from 'react';
import axios from 'axios';
import {
  useLoaderData,
} from 'react-router-dom';

function BatteryPage() {
  const batteryData = useLoaderData();
  return (
    <h1 className="text-3xl font-bold underline">
      Hello I Am BatteryPage Data:
      {batteryData[0].soc} %
    </h1>
  );
}

export default BatteryPage;

export const batteryLoader = () => (
  axios.get('http://localhost:3000/api/battery')
    .then((response) => {
      console.log('battery response: ', response);
      return response.data;
    })
    .catch((err) => {
      console.log('ERROR: ', err);
      return err.message;
    })
);
