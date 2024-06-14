import { Col, Row } from "react-bootstrap";
import { useSlideContext } from './SlideProvider';

function Acquisition()
{
  const {pointMetadata} = useSlideContext();

  return(
    <>
      <Row>
        <Col>
          <Row><h1>Z Trans</h1></Row>
          <img width={300} height={600} src={pointMetadata["z_trans"]}/>
        </Col>
        <Col>
          <Row><h1>Stack Size Esimtaion</h1></Row>
          <img width={300} height={600} src={pointMetadata["stack_size_estimation"]}/>
        </Col>
        <Col>
          <Row><h1>Focus Error Map</h1></Row>
          <img width={300} height={600} src={pointMetadata["focus_error_map"]}/>
        </Col>
      </Row>
    </>
  );
}

export default Acquisition;