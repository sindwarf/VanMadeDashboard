import React from 'react';
import { Line } from 'react-chartjs-2';

function LineChart({ chartData, scales }) {
  return (
    <div className="chart-container w-full h-1/2 pl-20 pr-20 pt-10 pb-10">
      {/* <h2 style={{ textAlign: 'center' }}>Line Chart</h2> */}
      <Line
        className="h-full"
        data={chartData}
        options={{
          responsive: true,
          interaction: {
            mode: 'index',
            intersect: false,
          },
          maintainAspectRatio: false,
          scales,
          plugins: {
            title: {
              display: true,
              text: 'Battery Data over last 10 minutes',
            },
            legend: {
              display: true,
            },
          },
        }}
      />
    </div>
  );
}
export default LineChart;
