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
    const column_names = ["aoi_name", "image_path", "smoothening_img_path", "profile_check_img_path", "final_img_path"];
    const rows_count = 10;

    for (let rowIdx = 0; rowIdx < rows_count; rowIdx++) {
      const row = []
      for(let colIdx = 0; colIdx < column_names.length; colIdx++){
        row.push(null);
      }
      matrix.push(row)
    }

    // for(let col_idx=0; col_idx<column_names.length; col_idx++){
    //   matrix[0][col_idx] = <h3>{column_names[col_idx]}</h3>;
    // }
    // column_names.forEach((column_name) => {
    //   matrix[0][column_names.indexOf(column_name)] = <h3>{column_name}</h3>;
    // });

    matrix[0][0] = <h3>AOI Name</h3>;
    matrix[0][1] = <h3>AOI Captured</h3>;
    matrix[0][2] = <h3>Smoothening</h3>;
    matrix[0][3] = <h3>Profile Check</h3>;
    matrix[0][4] = <h3>Final Outcome</h3>;

    for (let col_idx = 0; col_idx < column_names.length; col_idx++){
      for (let row_idx = 1; row_idx < rows_count; row_idx++) {
        if(col_idx === 0){
          matrix[row_idx][col_idx] = <strong>{pointMetadata["white_aois"][row_idx - 1][column_names[col_idx]]}</strong>
        }
        else{
          matrix[row_idx][col_idx] = <img width={120} height={60} src={pointMetadata["white_aois"][row_idx - 1][column_names[col_idx]]}/>
        }
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