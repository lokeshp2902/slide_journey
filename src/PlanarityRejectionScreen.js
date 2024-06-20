import React from 'react';
import { Col, Row } from 'react-bootstrap';

import { useSlideContext } from './SlideProvider';

function PlanarityRejection() {

    const {currentState, pointMetadata} = useSlideContext();

    return (
        <>
            <Row>
                <h4>Focus Sampling line slope(x-direction) :- <strong>{pointMetadata['line_slope']}</strong> microns per mm</h4>
                <h4>Plane slope(y-direction) :- <strong>{pointMetadata['plane_slope']}</strong> microns per mm</h4>
                <h4>High planarity :- <strong>{pointMetadata['rejection_status'].toString()}</strong></h4>
            </Row>
        </>
    );
}

export default PlanarityRejection;