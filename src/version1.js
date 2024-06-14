import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect, useRef } from 'react';

import './App.css'

function App() {

  const canvasRef = useRef(null);
  // const [boxPosition, setBoxPosition] = useState({ x: 745/2, y: 1318/2 }); // Initial position of the box
  const [canvasSize, setCanvasSize] = useState({ width: 752/2, height: 1843/2});
  const [Module, setModule] = useState(null);

  const points = {
    "aoi4589" : {
      x : 437.61217948718,
      y	: 602.739297385621
    },
    "aoi2529" : {
      x : 349.63782051282,
      y	: 364.23341503268
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.onload = () => {

      // Draw the scaled image on the canvas
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      let startPosX = 129.70
      let startPosY = 72.72

      let endPosX = 745.522435897436
      let endPosY = 1318.25694444444
      let height = 6.63
      let width = 11

      for (const [key, value] of Object.entries(points)) {
        // Draw the box on the canvas
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 0.5;
        ctx.strokeRect(value.x/2, value.y/2, width/2, height/2); // Draw a 100x100 box at the specified position        
      }
    };

    img.src = process.env.PUBLIC_URL + '/points_selected.jpeg';
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col md={9} className="left-column vh-100">

        </Col>
        <Col md={3} className="right-column vh-100">
          <center><canvas ref={canvasRef} width={canvasSize.width} height={canvasSize.height}></canvas></center>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
