import React from 'react';
import { Col, Row } from 'react-bootstrap';
import HeatMap from './HeatMap';

import { useSlideContext } from './SlideProvider';

function PlanarityRejection() {

    const {slideInput, currentModule, pointMetadata} = useSlideContext();
    let planarityMetadata = {};
    let blobsBestIndices1 = [];
    let blobsBestIndices2 = [];

    console.log("Current module : ", currentModule);
    console.log("Planarity data : ", pointMetadata);

    console.log("Length : ", slideInput["pipeline"].length);
    // for(let index=0; index<slideInput["pipeline"].length; index++)
    // {
    //     // Get planarity metadata
    //     if(slideInput["pipeline"][index]["module"] === "planarity_rejection"){
    //         console.log("Planarity data : ", slideInput["pipeline"][index]);
    //         planarityMetadata = slideInput["pipeline"][index];
    //         break;
    //     }
    //     else if(slideInput["pipeline"][index]["module"] == "best_z_level_estimation"){
    //         console.log("Sequence : ", slideInput["pipeline"][index].sequence);
    //         for(let idx=0; idx<slideInput["pipeline"][index].sequence.length; idx++){
    //             if(slideInput["pipeline"][index].sequence[idx]["module"] == "fine"){
    //                 blobsBestIndices1 = slideInput["pipeline"][index].sequence[idx]["blobs_best_indices1"];
    //                 blobsBestIndices2 = slideInput["pipeline"][index].sequence[idx]["blobs_best_indices2"];
    //                 console.log("Blobs best indices 1 : ", blobsBestIndices1);
    //                 console.log("Blobs best indices 2 : ", blobsBestIndices2);
    //             }
    //         }
    //     }
    // }

    return (
        <>
            <Row>
                <h4>Planarity threshold : <strong>{pointMetadata['planarity_threshold']}</strong> microns per mm</h4>
                <h4>Focus Sampling line slope(x-direction) : <strong>{pointMetadata['line_slope'].toFixed(3)}</strong> microns per mm</h4>
                <h4>Plane slope(y-direction) : <strong>{pointMetadata['plane_slope']}</strong> microns per mm</h4>
                <h4>High planarity : <strong>{pointMetadata['rejection_status'].toString()}</strong></h4>
                <Row>
                    <Col><img width={450} height={300} src={pointMetadata["image_path1"]} /></Col>
                    <Col><img width={450} height={300} src={pointMetadata["image_path2"]} /></Col>
                </Row>
                <Row>
                    <Col><HeatMap Data={pointMetadata["blobs_best_indices1"]}/></Col>
                    <Col><HeatMap Data={pointMetadata["blobs_best_indices2"]}/></Col>
                </Row>
            </Row>
        </>
    );
}

export default PlanarityRejection;