import { Col, Row } from 'react-bootstrap';
import { useSlideContext } from './SlideProvider';

function ReferenceEstimationScreen()
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
        <Col>
          <h5><strong>Tissue plane available : </strong>{pointMetadata["is_tissue_plane_available"]}</h5>
          <h5><strong>Material status : </strong>{pointMetadata["material_status"]}</h5>
          <h5><strong>Material type : </strong>{pointMetadata["material_type"]}</h5>
          <h5><strong>Best z classification : </strong>{pointMetadata["bestZ_classification"]}</h5>
        </Col>
      </Row>
    </>
  );
}

export default ReferenceEstimationScreen;