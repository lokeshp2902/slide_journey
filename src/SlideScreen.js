import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect, useRef} from 'react';

import {useSlideContext} from './hooks'

function SlideScreen()
{
  const canvasRef = useRef(null);
  console.log(1);

  const {slideInput, currentModule, currentGrid, boxesList} = useSlideContext();

  const [canvasSize, setCanvasSize] = useState({
     width: (slideInput["imaging_areas_coords"]["end_x"] - slideInput["imaging_areas_coords"]["start_x"])/2,
     height: (slideInput["imaging_areas_coords"]["end_y"] - slideInput["imaging_areas_coords"]["start_y"])/2
    });
  console.log("Profile : ", slideInput["profile"]);
  <h1>{slideInput["profile"]}</h1>

  useEffect(() => {
    const img = new Image();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    console.log(3);

    img.onload = () => {
      // Draw the scaled image on the canvas
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      console.log(4);
      for (let value of boxesList) {
        console.log(value);
        // Draw the box on the canvas
        ctx.strokeStyle = value.color;
        console.log(5);
        // ctx.strokeStyle = '#006400';
        ctx.lineWidth = 2;
        ctx.strokeRect(
          (value.start_x - slideInput["imaging_areas_coords"]["start_x"])/2, 
          (value.start_y - slideInput["imaging_areas_coords"]["start_y"])/2, 
          (value.end_x - value.start_x)/2, (value.end_y - value.start_y)/2
        );

        // if(currentModule === "grid_coordinates")
        // {
        //   // Draw the box number on the top-left of the box
        //   ctx.fillStyle = 'black'; // You can change the text color if needed
        //   ctx.font = '14px Arial'; // You can adjust the font size and family as needed
        //   ctx.fillText(currentGrid, 
        //     (value.start_x - slideInput["imaging_areas_coords"]["start_x"]) / 2, 
        //     (value.start_y - slideInput["imaging_areas_coords"]["start_y"]) / 2 - 5 // Adjust the y position slightly above the box
        //   );
        // }
      }
    }
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