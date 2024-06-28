// src/HeatMap.js
import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import Papa from 'papaparse';

const HeatMap = ({Data}) => {
  const [heatmapData, setHeatmapData] = useState([]);
  console.log("Indices Data : ", Data);

  useEffect(() => {
    // Reshape the data into a 2D array (assuming fixed dimensions 7x5)
    
    const reshapedData = [];
    for (let i = 0; i < 5; i++) {
        reshapedData.push(Data.slice(i * 7, (i + 1) * 7));
    }
    setHeatmapData(reshapedData);
  }, [Data]);
  console.log("Indices Data : ", heatmapData);

  return (
    <div>
      <Plot
        data={[
          {
            z: heatmapData,
            type: 'heatmap',
            colorscale: 'Viridis',
            showscale: true,
            xgap: 0.5,  // Adds space between grid cells on the x-axis
            ygap: 0.5,  // Adds space between grid cells on the y-axis
          },
        ]}
        layout={{
          title: 'Blob Wise Best Index (Heat map)',
          xaxis: {
            title: 'Blob Column Index',
            tickvals: [0, 1, 2, 3, 4, 5, 6],
            ticktext: ['1', '2', '3', '4', '5', '6', '7'],
            range: [-0.5, 6.5],  // Extend the axis range to include the lines
          },
          yaxis: {
            title: 'Blob Row Index',
            tickvals: [0, 1, 2, 3, 4],
            ticktext: ['1', '2', '3', '4', '5'],
            range: [-0.5, 4.5],  // Extend the axis range to include the lines
          },
          height: 400,
          width: 450,
        }}
      />
    </div>
  );
};

export default HeatMap;
