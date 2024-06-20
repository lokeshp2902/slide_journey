import { Col, Row } from 'react-bootstrap';
import { useSlideContext } from './SlideProvider';

function PlaneScreen()
{
  const {currentState, pointMetadata} = useSlideContext();
  console.log("Data : ", pointMetadata);

  const getPlaneMatrix = () => {
    const input_keys = [""];
    const output_matrix = [];

    Object.keys(pointMetadata).forEach(key => {
      input_keys.push(key)
    });

    console.log("Keys : ", input_keys.length);
    for (let rowIdx = 0; rowIdx < input_keys.length-1; rowIdx++) {
      const key_name = input_keys[rowIdx].split("_").join(" ");
      output_matrix.push(<Row><strong>{key_name}</strong></Row>)
    }

    return output_matrix;
  }

  return(
    <>
      <Row>
        <h4><strong>Plane Status :- </strong>{pointMetadata["plane_status"].split('.').at(-1).split("_").join(" ")}</h4>
      </Row>
      <Row>
        <Col>
          <h5><strong>Plane X coefficient : </strong>{pointMetadata["plane_x_coff"]}</h5>
          <h5><strong>Plane Y coefficient : </strong>{pointMetadata["plane_y_coeff"]}</h5>
          <h5><strong>Plane constant : </strong>{pointMetadata["plane_const"]}</h5>
          <h5><strong>Delta Z flag : </strong>{pointMetadata["delta_z_flag"]}</h5>
          <h5><strong>Collinearity flag : </strong>{pointMetadata["collinearity_flag"]}</h5>
          <h5><strong>Spatial flag : </strong>{pointMetadata["spatial_distribution_flag"]}</h5>
          <h5><strong>Confidence score : </strong>{pointMetadata["confidence_score"]}</h5>
          <h5><strong>Delta Z value : </strong>{pointMetadata["delta_z_value"]}</h5>
        </Col>
        {/* <Col>
          {getPlaneMatrix}
        </Col> */}
        <Col>
          <img src={pointMetadata["debug_image"]} width="500" height="400"/>
        </Col>
      </Row>
    </>
  );
}

export default PlaneScreen;