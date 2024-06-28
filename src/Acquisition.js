import { Col, Row } from "react-bootstrap";
import { useSlideContext } from './SlideProvider';
import styled from 'styled-components';
import Legend from './Legend';

function Acquisition()
{
  const {pointMetadata} = useSlideContext();

  const zTranslationLegendItems = [
    { label: 'Valid foreground', color: '#00FF00' },
    { label: 'Invalid foreground', color: '#FF0000' },
    { label: 'Background FOV', color: '#7F7F7F' },
    { label: 'Hitting upper boundary', color: '#79661b' },
    { label: 'Hitting lower boundary', color: '#De9dac' }
  ];

  const stackSizeEstimationLegendItems = [
    { label: 'Stack size captured', color: '#b5651d' },
    { label: 'Valid foreground', color: '#808080' },
    { label: 'Valid foreground which needs more stack size than captured', color: '#CF9FFF' },
    { label: 'Invalid foreground to estimate the stack size', color: '#FF0000' },
    { label: 'Stack size estimated', color: '#89CFF0' }
  ];

  const focusErrorMapLegendItems = [
    { label: 'In focus FOV', color: '#00FF00' },
    { label: 'Out of Focus FOV', color: '#FF0000' },
    { label: 'Possible debris FOV', color: '#FFFF00' },
    { label: 'Possible annotation FOV', color: '#FF00FF' },
    { label: 'Possible coverslip FOV', color: '#00FFFF' },
    { label: 'Background FOV with stack', color: '#7F7F7F' }
  ];

  return(
    <>
      <Row>
        <Col>
          <TitleRow><h3>Z Translation</h3></TitleRow>
          <Row><img width={300} height={600} src={pointMetadata["z_trans"]} alt="Z Translation"/></Row>
          <TitleRow><Legend items={zTranslationLegendItems} /></TitleRow>
        </Col>
        <Col>
          <TitleRow><h3>Stack Size Estimation</h3></TitleRow>
          <Row><img width={300} height={600} src={pointMetadata["stack_size_estimation"]} alt="Stack Size Estimation"/></Row>
          <TitleRow><Legend items={stackSizeEstimationLegendItems} /></TitleRow>
        </Col>
        <Col>
          <TitleRow><h3>Focus Error Map</h3></TitleRow>
          <Row><img width={300} height={600} src={pointMetadata["focus_error_map"]} alt="Focus Error Map"/></Row>
          <TitleRow><Legend items={focusErrorMapLegendItems} /></TitleRow>
        </Col>
      </Row>
    </>
  );
}

export default Acquisition;

const TitleRow = styled(Row)`
  display: flex; /* Use Flexbox */
  align-items: center; /* Center items vertically */
  justify-content: center; /* Center items horizontally */
  text-align: center; /* Center text */
`