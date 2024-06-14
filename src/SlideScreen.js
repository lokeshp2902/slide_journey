import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect, useRef} from 'react';

import {useSlideContext} from './hooks'

function SlideScreen()
{
  const canvasRef = useRef(null);

  const {slideInput, boxesList} = useSlideContext();

  const [canvasSize, setCanvasSize] = useState({
     width: (slideInput["imaging_areas_coords"]["end_x"] - slideInput["imaging_areas_coords"]["start_x"])/2,
     height: (slideInput["imaging_areas_coords"]["end_y"] - slideInput["imaging_areas_coords"]["start_y"])/2
    });

  useEffect(() => {
    const img = new Image();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    img.onload = () => {
      // Draw the scaled image on the canvas
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      for (let value of boxesList) {
        // console.log(value);
        // Draw the box on the canvas
        ctx.strokeStyle = 'green';
        ctx.lineWidth = 0.5;
        ctx.strokeRect(
          (value.start_x - slideInput["imaging_areas_coords"]["start_x"])/2, 
          (value.start_y - slideInput["imaging_areas_coords"]["start_y"])/2, 
          (value.end_x - value.start_x)/2, (value.end_y - value.start_y)/2
        );
      }
    }
    console.log("Path " , slideInput["slide_image_path"])
    img.src = slideInput["slide_image_path"];

  }, [slideInput, boxesList]);

  return(
    <>
      <center>
        <canvas ref={canvasRef} width={canvasSize.width} height={canvasSize.height}></canvas>
      </center>
    </>
  );
}

export default SlideScreen;