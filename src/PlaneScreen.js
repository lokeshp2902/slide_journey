import { Col, Row } from 'react-bootstrap';
import { useSlideContext } from './SlideProvider';

function PlaneScreen()
{
  const {currentState, pointMetadata} = useSlideContext();

  return(
    <>
      <h1>{pointMetadata["plane_status"]}</h1>
      <Row>
        <Col>
        </Col>
        <Col>
          <img src={pointMetadata["debug_image"]} width="300" height="600"/>
        </Col>
        <Col>
        </Col>
      </Row>
      <Row>
      </Row>
    </>
  );
}

export default PlaneScreen;