import React from 'react';
import { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

function LineChart({flow}){

  // Register the necessary components
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

  const [dataPoints, setDataPoints] = useState({
    labels: Object.keys(flow),
    datasets: [
      {
        label: "FM",
        data: Object.values(flow),
        borderColor: "black",
        borderWidth: 1
      }
    ]
  });

  return (
    <Line data={dataPoints} width={100} height={100}/>
  );
}

export default LineChart;