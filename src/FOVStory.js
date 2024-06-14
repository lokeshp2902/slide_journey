import { useState, useEffect } from 'react';
import './FOVStory.css';

import Axis from './axis';

function FOVStory()
{
  const [color_change_index, set_color_change_index] = useState(0);
  const [focus_metric, set_focus_metric] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if(color_change_index < 80)
      {
        let value = color_change_index + 1;
        set_color_change_index(value);
        set_focus_metric(value);
        // console.log(value);
        // console.log(color_change_index);
      }
      else
      {

      }
    }, 500); // Change color every second

    return () => clearInterval(timer);
  }, [color_change_index, focus_metric]);

  return(
    <>
      <div className="container">
      <div className="magnification">
        <div className="rectangle" />
        <div class="tower-cap" />
      </div>
      </div>
        <div className="flow">
            <Axis length={800} tickInterval={10} orientation="vertical" color_change_index={color_change_index} focus_metric={focus_metric}/>
          <div className="metric">
            <div className="best-image">

            </div>
            <div className="metric-values">

            </div>
          </div>
        </div>
    </>
  );
};

export default FOVStory;