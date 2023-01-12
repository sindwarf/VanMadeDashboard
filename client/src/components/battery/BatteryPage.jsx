import React, { useState } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';
import {
  useLoaderData,
} from 'react-router-dom';
import LineChart from './LineChart';

function BatteryPage() {
  const batteryData = useLoaderData();
  const [socData, setSocData] = useState({
    labels: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    datasets: [
      {
        label: 'State of Charge',
        data: batteryData.slice(0).reverse().map((values) => (values.soc)),
        backgroundColor: [
          '#BD6B73',
        ],
        color: [
          '#BD6B73',
        ],
        borderColor: '#black',
        borderWidth: 2,
        yAxisID: 'y',
      },
    ],
  });
  const [voltageChartData, setVoltageChartData] = useState({
    labels: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    datasets: [
      {
        label: 'Battery Voltage',
        data: batteryData.slice(0).reverse().map((values) => (values.voltage / 1000)),
        backgroundColor: [
          '#BD6B73',
        ],
        color: [
          '#BD6B73',
        ],
        borderColor: '#BD6B73',
        borderWidth: 2,
        yAxisID: 'y',
      },
      {
        label: 'Power draw in Amps',
        data: batteryData.map((values) => (values.current / 1000)),
        backgroundColor: [
          '#729B79',
        ],
        color: [
          '#BD6B73',
        ],
        borderColor: '#729B79',
        borderWidth: 2,
        yAxisID: 'y1',
      },
    ],
  });
  const scalesPercentage = {
    y: {
      ticks: {
        callback: (value) => (`${value} %`),
      },
    },
  };
  const scalesVoltage = {
    y: {
      ticks: {
        callback: (value) => (`${value} V`),
      },
      type: 'linear',
      display: true,
      position: 'left',
    },
    y1: {
      ticks: {
        callback: (value) => (`${value} A`),
      },
      type: 'linear',
      display: true,
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
    },
  };

  return (
    <div className="h-screen bg-champagne">
      <LineChart chartData={voltageChartData} scales={scalesVoltage} />
      <LineChart chartData={socData} scales={scalesPercentage} />
    </div>
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
