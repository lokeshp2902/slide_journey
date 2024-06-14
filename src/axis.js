import React, { useEffect, useState } from 'react';

const Axis = ({ length, tickInterval, orientation, color_change_index, focus_metric }) => {
  const ticks = [];
  const axisWidth = orientation === 'horizontal' ? length : 100;
  const axisHeight = orientation === 'horizontal' ? 100 : length;
  const [labelColors, setlabelColors] = useState([]);
  const [focusMetric, setfocusMetric] = useState([]);

  for (let i = 0; i <= length; i += tickInterval) {
    ticks.push(i);
    labelColors.push('black');
    focusMetric.push(0);
  }

  useEffect(()=>{
    labelColors[color_change_index] = "green";
    setlabelColors(labelColors);
    focusMetric[color_change_index] = focus_metric;
    setfocusMetric(focusMetric);
    // console.log(focus_metric);
  }, [color_change_index, focus_metric, labelColors, focusMetric]);

  return (
    <svg width={axisWidth} height={axisHeight}>

      {/* Add tick labels */}
      {ticks.map((tick, index) => 
        (
          index % 5 === 0 && (<text
            key={index}
            x={orientation === 'horizontal' ? tick : 0}
            y={orientation === 'horizontal' ? 25 : tick + 5}
            textAnchor={orientation === 'horizontal' ? 'middle' : 'start'}
            fontSize="8"
          >
            {tick}
          </text>)
      ))}

      {/* Draw the axis line */}
      <line
        x1={orientation === 'horizontal' ? 0 : 40}
        y1={orientation === 'horizontal' ? 40 : 0}
        x2={orientation === 'horizontal' ? length : 40}
        y2={orientation === 'horizontal' ? 40 : length}
        stroke="black"
        strokeWidth=""
      />

      {/* Add tick marks */}
      {ticks.map((tick, index) => (
        <circle
          key={index}
          cx={orientation === 'horizontal' ? tick : 40}
          cy={orientation === 'horizontal' ? 40 : tick}
          r="3" // radius of the circle
          fill={labelColors[index]} // color of the circle
        />
      ))}

      {/* Add tick labels */}
      {ticks.map((tick, index) => 
        (
          <text
            key={index}
            x={orientation === 'horizontal' ? tick : 65}
            y={orientation === 'horizontal' ? 25 : tick + 5}
            textAnchor={orientation === 'horizontal' ? 'middle' : 'start'}
            fontSize="8"
          >
            {focusMetric[index]}
          </text>
      ))}

    </svg>
  );
};

export default Axis;