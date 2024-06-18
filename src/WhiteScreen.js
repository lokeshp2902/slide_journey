import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';

import { useSlideContext } from './SlideProvider';
import { Container } from 'react-bootstrap';

function WhiteScreen()
{
  const {currentState, pointMetadata} = useSlideContext();

  function getWhiteMatrix()
  {

    const matrix = [];
    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
      const row = []
      for(let colIdx = 0; colIdx < 3; colIdx++){
        row.push(null);
      }
      matrix.push(row)
      console.log(rowIdx);
    }

    let idx = 0;
    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
      for(let colIdx = 0; colIdx < 3; colIdx++){
        matrix[rowIdx][colIdx] = <Col>
            <h5>{pointMetadata["white_aois"][idx]["aoi_name"]}</h5>
            <img width={150} height={75} src={pointMetadata["white_aois"][idx]["image_path"]}/>
          </Col>;
        idx++;
      }
    }

    const outputMatrix = [];
    for(let rowIdx = 0; rowIdx < matrix.length; rowIdx++)
    {
      const row = [];
      for(let colIdx = 0; colIdx < matrix[0].length; colIdx++)
      {
        if(matrix[rowIdx][colIdx] == null)
          row.push(<Col>NA</Col>);
        else
          row.push(matrix[rowIdx][colIdx]);
      }
      outputMatrix.push(<Row>{row}</Row>);
    }

    return <Container>{outputMatrix}</Container>;
  }

  return(
    <>
    {getWhiteMatrix()}
    <h1>White Found {pointMetadata["white_found_status"]}</h1>
    <Col>
      <img width={250} height={150} src={pointMetadata["white_path"]}/>
    </Col>
    <Col>
    </Col>
  
    </>
  );
}

export default WhiteScreen;