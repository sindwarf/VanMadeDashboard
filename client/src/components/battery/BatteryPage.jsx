import React, { useState } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';
import {
  useLoaderData,
} from 'react-router-dom';
import { line } from 'react-chartjs-2';

function BatteryPage() {
  const data = {
    labels: ['Red', 'Orange', 'Blue'],
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
        {
          label: 'Popularity of colours',
          data: [55, 23, 96],
          // you can set indiviual colors for each bar
          backgroundColor: [
            'rgba(255, 255, 255, 0.6)',
            'rgba(255, 255, 255, 0.6)',
            'rgba(255, 255, 255, 0.6)',
          ],
          borderWidth: 1,
        }
    ]
}
const [chartData, setChartData] = useState({
  labels: Data.map((data) => data.year),
  datasets: [
    {
      label: "Users Gained ",
      data: Data.map((data) => data.userGain),
      backgroundColor: [
        "rgba(75,192,192,1)",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0"
      ],
      borderColor: "black",
      borderWidth: 2
    }
  ]
});
  const batteryData = useLoaderData();
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello I Am BatteryPage Data:
        {batteryData[0].soc} %
      </h1>
      <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Line Chart</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
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
