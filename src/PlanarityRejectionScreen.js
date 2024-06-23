import React from 'react';
import { Col, Row } from 'react-bootstrap';

import { useSlideContext } from './SlideProvider';

function PlanarityRejection() {

    const {slideInput, currentModule, pointMetadata} = useSlideContext();
    let planarityMetadata = {};

    console.log("Length : ", slideInput["pipeline"].length);
    for(let idx=0; idx<slideInput["pipeline"].length; idx++)
    {
        // Get planarity metadata
        if(slideInput["pipeline"][idx]["module"] === "planarity_rejection"){
            console.log("Planarity data : ", slideInput["pipeline"][idx]);
            planarityMetadata = slideInput["pipeline"][idx];
        }
    }

    return (
        <>
            <Row>
                <h4>Planarity threshold :- <strong>{pointMetadata['planarity_threshold']}</strong> microns per mm</h4>
                <h4>Focus Sampling line slope(x-direction) :- <strong>{pointMetadata['line_slope']}</strong> microns per mm</h4>
                <h4>Plane slope(y-direction) :- <strong>{pointMetadata['plane_slope']}</strong> microns per mm</h4>
                <h4>High planarity :- <strong>{pointMetadata['rejection_status'].toString()}</strong></h4>
            </Row>
        </>
    );
}

export default PlanarityRejection;