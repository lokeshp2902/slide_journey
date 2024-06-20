import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import { Row, Col } from 'react-bootstrap';
import {useSlideContext} from './hooks'
import styled from 'styled-components';

function Banner(){
  const {slideInput, currentGrid, currentModule} = useSlideContext();

  return(
    <>
      <RectangleRow>
        <RectangleColumn md={3}><strong>Slide Name : </strong>{slideInput["slide_name"]}</RectangleColumn>
        <RectangleColumn md={3}><strong>Slide Thickness : </strong>{slideInput["slide_thickness"]}</RectangleColumn>
        <RectangleColumn md={2}><strong>Current Grid : </strong>{currentGrid}</RectangleColumn>
        <RectangleColumn md={4}><strong>Current Module : </strong>{currentModule.split("_").join(" ")}</RectangleColumn>
      </RectangleRow>
    </>
  );
}

export default Banner;

const RectangleRow = styled(Row)`
  padding-top: 5px;
  padding-bottom: 5px;
`
const RectangleColumn = styled(Col)`
  padding-top: 5px;
`