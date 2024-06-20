import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';

import { useSlideContext } from './SlideProvider';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

function WhiteScreen()
{
  const {currentState, pointMetadata} = useSlideContext();

  function getWhiteMatrix()
  {
    const matrix = [];
    for (let rowIdx = 0; rowIdx < 10; rowIdx++) {
      const row = []
      for(let colIdx = 0; colIdx < 5; colIdx++){
        row.push(null);
      }
      matrix.push(row)
      // console.log(rowIdx);
    }

    // let idx = 0;
    // for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
    //   for(let colIdx = 0; colIdx < 3; colIdx++){
    //     matrix[rowIdx][colIdx] = <Col>
    //         <h5>{pointMetadata["white_aois"][idx]["aoi_name"]}</h5>
    //         <img width={150} height={75} src={pointMetadata["white_aois"][idx]["image_path"]}/>
    //       </Col>;
    //     idx++;
    //   }
    // }

    matrix[0][0] = <h3>AOI Name</h3>;
    matrix[0][1] = <h3>AOI Captured</h3>;
    matrix[0][2] = <h3>Smoothening</h3>;
    matrix[0][3] = <h3>Profile Check</h3>;
    matrix[0][4] = <h3>Final Outcome</h3>;

    for (let row_idx = 0; row_idx < 10; row_idx++) {
      if (row_idx > 0) {
        matrix[row_idx][0] = <strong>{pointMetadata["white_aois"][row_idx - 1]["aoi_name"]}</strong>
      }
    }

    for (let row_idx = 0; row_idx < 10; row_idx++) {
      if (row_idx > 0) {
        matrix[row_idx][1] = <img width={120} height={60} src={pointMetadata["white_aois"][row_idx - 1]["image_path"]}/>
      }
    }

    for (let row_idx = 0; row_idx < 10; row_idx++) {
      if (row_idx > 0) {
        matrix[row_idx][2] = <img width={120} height={60} src={pointMetadata["white_aois"][row_idx - 1]["smoothening_img_path"]}/>
      }
    }

    for (let row_idx = 0; row_idx < 10; row_idx++) {
      if (row_idx > 0) {
        matrix[row_idx][3] = <img width={120} height={60} src={pointMetadata["white_aois"][row_idx - 1]["profile_check_img_path"]}/>
      }
    }

    for (let row_idx = 0; row_idx < 10; row_idx++) {
      if (row_idx > 0) {
        matrix[row_idx][4] = <img width={120} height={60} src={pointMetadata["white_aois"][row_idx - 1]["final_img_path"]}/>
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
          row.push(<CellPadding>{matrix[rowIdx][colIdx]}</CellPadding>);
      }
      outputMatrix.push(<Row>{row}</Row>);
    }

    return <Container>{outputMatrix}</Container>;
  }

  return(
    <>
    {getWhiteMatrix()}
    <h2>White Found :- {pointMetadata["white_found_status"].toString()}</h2>
    <Col>
    </Col>
    <Col>
      <img width={250} height={150} src={pointMetadata["white_path"]}/>
    </Col>
    <Col>
    </Col>
  
    </>
  );
}

export default WhiteScreen;

const CellPadding = styled(Col)`
  border-collapse: collapse;
  padding-top: 2px;
  padding-bottom: 2px;
  text-align: center;
  border: 0.05px solid #B6B6B4;
`