import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect, useRef} from 'react';

import {useSlideContext} from './hooks'

function RightPanel()
{
  const canvasRef = useRef(null);
  const [canvasSize, setCanvasSize] = useState({ width: 752/2, height: 1843/2});
  const [boxList, setBoxList] = useState(null);

  const {gridPointsData, setPointMetadata, setTriggerNext} = useSlideContext();

  const handleCanvasClick = (event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Find the box clicked based on coordinates
    const box = getBoxAtPosition(x, y);
    if (box) {
      // Set the clicked box
      setPointMetadata(box);

      // Output the unique identifier of the clicked box
      // console.log('Clicked box:', box.name);
    }
  };

  const getBoxAtPosition = (x, y) => {
    // Find the box at the clicked position
    for (const box of boxList) {
      // console.log(boxList);
      if (x >= box.x && x <= box.x + box.width && y >= box.y && y <= box.y + box.height) {
        return box;
      }
    }
    return null;
  };

  useEffect(()=>{

    setBoxList([]);
    const boxes = [];

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    for (const [key, value] of Object.entries(gridPointsData)) {
      // Draw the box on the canvas
      if(value.directional_probing == true)
        ctx.strokeStyle = 'purple';
      else
        ctx.strokeStyle = 'red';
      ctx.lineWidth = 0.5;
      ctx.strokeRect(value.x/2, value.y/2, value.width/2, value.height/2);
      boxes.push({ 
        "name" : key,
        "x" : (value.x/2), 
        "y" : value.y/2,
        "width" : value.width/2, 
        "height" : value.height/2,
        "value" : value
      });
    }
    setBoxList(boxes);
  }, [gridPointsData]);

  useEffect(() => {
    const img = new Image();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    img.onload = () => {
      // Draw the scaled image on the canvas
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    img.src = "http://localhost/hdd/points_selected.jpeg";
  }, []);

  return(
    <>
      <center>
        <h4>Slot Image</h4>
        <canvas ref={canvasRef} width={canvasSize.width} height={canvasSize.height} onClick={handleCanvasClick}></canvas>
      </center>
    </>
  );
}

export default RightPanel;