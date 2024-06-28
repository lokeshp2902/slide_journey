import React, { useEffect } from 'react';
import { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

function LineChart({flow}){

  // Register the necessary components
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

  // Function to format the values
  const formatFlowValues = (data) => {
    const formattedData = {};
    Object.entries(data).forEach(([key, value]) => {
      const newKey = key.slice(0, -4);
      const newValue = parseFloat(value).toFixed(2);
      formattedData[newKey] = newValue;
    });
    return formattedData;
  };

  const formattedFlow = formatFlowValues(flow);

  const [dataPoints, setDataPoints] = useState({
    labels: Object.keys(formattedFlow),
    datasets: [
      {
        // label: "Focus metric",
        data: Object.values(formattedFlow),
        borderColor: "black",
        borderWidth: 1,
        pointRadius: 1
      }
    ]
  });

  // Use useEffect to iterate and log the flow object
  // useEffect(() => {
  //   // Iterate over the flow object and log each key-value pair
  //   Object.entries(formattedFlow).forEach(([key, value]) => {
  //     console.log(`${key}: ${value}`);
  //   });
  // }, [flow]);

  const options = {
    // scales: {
    //   x: {
    //     ticks: {
    //       callback: function(value, index, values) {
    //         return value.toFixed(2); // Display x-axis values as integers
    //       }
    //     }
    //   },
      // y: {
      //   min: 0, // Set the minimum value for the y-axis
      //   max: 100, // Set the maximum value for the y-axis
      //   title: {
      //     display: true,
      //     text: 'Focus Metric'
      //   }
      // }
    // },
    plugins: {
      legend: {
        display: false, // Set this to false to hide the legend completely
        // Uncomment the lines below to customize the legend
        // labels: {
        //   usePointStyle: true, // Use point style instead of box
        //   pointStyle: 'line', // Set the point style
        //   font: {
        //     size: 10 // Reduce the font size
        //   }
        // }
      }
    }
  };

  return (
    <Line data={dataPoints} options={options} width={100} height={100}/>
  );
}

export default LineChart;