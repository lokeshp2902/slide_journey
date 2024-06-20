import { Col, Row } from "react-bootstrap";
import { useSlideContext } from './SlideProvider';

function Acquisition()
{
  const {pointMetadata} = useSlideContext();

  return(
    <>
      <Row>
        <Col>
          <Row><h3>Z Translation</h3></Row>
          <img width={300} height={600} src={pointMetadata["z_trans"]}/>
        </Col>
        <Col>
          <Row><h3>Stack Size Esimtaion</h3></Row>
          <img width={300} height={600} src={pointMetadata["stack_size_estimation"]}/>
        </Col>
        <Col>
          <Row><h3>Focus Error Map</h3></Row>
          <img width={300} height={600} src={pointMetadata["focus_error_map"]}/>
        </Col>
      </Row>
    </>
  );
}

export default Acquisition;