import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import './App.css';

import SlideProvider from './SlideProvider'
import Banner from './Banner';
import CenterScreen from './CenterScreen';
import RightScreen from './RightScreen';

import { useSlideContext } from './SlideProvider';


function App() {
  const {currentState, nextButtonClick} = useSlideContext();

  return (
    <SlideProvider>
      <Container fluid>
        <Row>
          <Col md={9} className="left-column vh-100">
            <Row>
              <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                  <Banner />
                </Container>
              </Navbar>
            </Row>
            <Row>
              <CenterScreen />
            </Row>
          </Col>
          <Col md={3} className="right-column vh-100">
            <RightScreen />
          </Col>
        </Row>
      </Container>
    </SlideProvider>
  );
}

export default App;
