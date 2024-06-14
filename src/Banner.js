import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import { Col } from 'react-bootstrap';
import {useSlideContext} from './hooks'

function Banner(){
  const {slideInput, currentGrid, currentModule} = useSlideContext();

  return(
    <>
      <Col><strong>Slide Name : </strong>{slideInput["slide_name"]}</Col>
      <Col><strong>Slide Thickness : </strong>{slideInput["slide_thickness"]}</Col>
      <Col><strong>Current Grid : </strong>{currentGrid}</Col>
      <Col><strong>Current Module : </strong>{currentModule}</Col>
    </>
  );
}

export default Banner;
