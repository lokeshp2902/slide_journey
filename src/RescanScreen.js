import { Col, Row } from "react-bootstrap";
import { useSlideContext } from './SlideProvider';

function RescanAcq()
{
  const {pointMetadata} = useSlideContext();

  return(
    <>
      <Row>
            <Col>
            </Col>
            <Col>
                <h3>Rescanned Regions</h3>
                <img width={300} height={600} src={pointMetadata["rescan_image"]}/>
            </Col>
            <Col>
            </Col>
      </Row>
    </>
  );
}

export default RescanAcq;