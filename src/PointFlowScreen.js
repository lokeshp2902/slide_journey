import LineChart from './LineChart';
import React, { useState } from 'react';

//icons 
import { ReactComponent as RightArrow } from '../src/assets/icons/right-arrow.svg'

import { useSlideContext } from './SlideProvider';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import styled from 'styled-components';

function PointFlowScreen() {
  const { pointMetadata } = useSlideContext();
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const getRowNames = () => {
    const input_keys = [""];
    // console.log(pointMetadata);

    if (pointMetadata) {
      let idx = 0;
      for (idx = 0; idx < pointMetadata.sequence.length; idx++) {
        if (pointMetadata.sequence[idx]["module"] === "fine") {
          break;
        }
      }

      if (!(idx >= 0 && idx < pointMetadata.sequence.length)) {
        // console.log(idx);
        idx = 0;
      }

      Object.keys(pointMetadata.sequence[idx].input).forEach(key => {
        input_keys.push(key)
      });
      Object.keys(pointMetadata.sequence[idx].output).forEach(key => {
        input_keys.push(key)
      });
    }
    // input_keys.push("focus_metric_distribution");
    // console.log(input_keys);
    return input_keys;
  }

  const isInteger = (num) => {
    return Number.isInteger(num);
  };

  const getColumnNames = () => {
    const input_keys = [""];
    if (pointMetadata) {
      for (let i = 0; i < pointMetadata.sequence.length; i++) {
        input_keys.push(pointMetadata.sequence[i].module)
      }
    }
    return input_keys;
  }

  const generateFineDistribution = () => {

    let fine_fm_distrib = []
    for (let idx = 0; idx < pointMetadata.sequence.length; idx++) {
      if (pointMetadata.sequence[idx]["module"] === "fine") {
        fine_fm_distrib = pointMetadata.sequence[idx]["output"]["focus_metric_distribution"];
        // console.log("Fine matrix length : ", fine_fm_distrib.length);
      }
    }

    const fine_matrix = [];
    for (let rowIdx = 0; rowIdx < 5; rowIdx++) {
      const row = [];
      for (let colIdx = 0; colIdx < 7; colIdx++) {
        row.push(null);
      }
      fine_matrix.push(row);
    }

    let index = 0;
    for (let col_idx=0; col_idx<7; col_idx++){
      for (let row_idx=0; row_idx<5; row_idx++){
        // console.log("Focus metric : ", fine_fm_distrib[index]);
        fine_matrix[row_idx][col_idx] = (<CellContainer><SizeCol><LineChart flow={fine_fm_distrib[index]} /></SizeCol></CellContainer>);
        index++;
      }
    }

    const outputFineMatrix = [];
    for (let rowIdx = 0; rowIdx < fine_matrix.length; rowIdx++) {
      const row = [];
      for (let colIdx = 0; colIdx < fine_matrix[0].length; colIdx++) {
        if (fine_matrix[rowIdx][colIdx] == null)
          row.push(<CellContainer>NA</CellContainer>);
        else
          row.push(fine_matrix[rowIdx][colIdx]);
      }
      outputFineMatrix.push(<Row>{row}</Row>);
    }

    return <Container>{outputFineMatrix}</Container>;
  }

  const generateMatrix = () => {
    let rowNames = getRowNames();
    let colNames = getColumnNames();

    if (rowNames.length > 1 && colNames.length > 1) {
      const matrix = [];
      for (let rowIdx = 0; rowIdx < rowNames.length; rowIdx++) {
        const row = []
        for (let colIdx = 0; colIdx < colNames.lengthl; colIdx++) {
          row.push(null);
        }
        matrix.push(row)
      }

      for (let colIdx = 0; colIdx < colNames.length; colIdx++) {
        const column_name = colNames[colIdx].split("_").join(" ");
        matrix[0][colIdx] = <CellContainer><strong>{column_name}</strong></CellContainer>
      }

      for (let rowIdx = 0; rowIdx < rowNames.length; rowIdx++) {
        const row_name = rowNames[rowIdx].split("_").join(" ");
        matrix[rowIdx][0] = <CellContainer><strong>{row_name}</strong></CellContainer>
      }

      for (let idx = 0; idx < pointMetadata.sequence.length; idx++) {
        for (let rowIdx = 0; rowIdx < rowNames.length; rowIdx++) {
          if (rowNames[rowIdx] in pointMetadata.sequence[idx]["output"]) {
            if (rowNames[rowIdx] === "focus_metric_distribution") {
              console.log("Col module : ", pointMetadata.sequence[idx].module);
              if (pointMetadata.sequence[idx].module === "fine") {
                matrix[rowIdx][idx + 1] = (<CellContainer><button onClick={handleShow}>Fine FM Distribution</button></CellContainer>);
              } else {
                matrix[rowIdx][idx + 1] = (<CellContainer><CustomCol><LineChart flow={pointMetadata.sequence[idx]["output"][rowNames[rowIdx]]} /></CustomCol></CellContainer>);
              }
            }
            else if (rowNames[rowIdx] === "image_path") {
              matrix[rowIdx][idx + 1] = (<CellContainer><img width={150} height={75} src={pointMetadata.sequence[idx]["output"][rowNames[rowIdx]]} /></CellContainer>);
            }
            else {
              if (typeof pointMetadata.sequence[idx]["output"][rowNames[rowIdx]] === 'number'){
                if (isInteger(pointMetadata.sequence[idx]["output"][rowNames[rowIdx]])) {
                  matrix[rowIdx][idx + 1] = (<CellContainer>{pointMetadata.sequence[idx]["output"][rowNames[rowIdx]]}</CellContainer>);
                } else
                {
                  console.log("Point data : ", pointMetadata.sequence[idx]["output"][rowNames[rowIdx]]);
                  matrix[rowIdx][idx + 1] = (<CellContainer>{pointMetadata.sequence[idx]["output"][rowNames[rowIdx]].toFixed(3)}</CellContainer>);
                }
              } else {
                console.log("Point data : ", pointMetadata.sequence[idx]["output"][rowNames[rowIdx]]);
                matrix[rowIdx][idx + 1] = (<CellContainer>{pointMetadata.sequence[idx]["output"][rowNames[rowIdx]].toString()}</CellContainer>);
              }
            }
          }
          if (rowNames[rowIdx] in pointMetadata.sequence[idx]["input"])
            matrix[rowIdx][idx + 1] = (<CellContainer>{pointMetadata.sequence[idx]["input"][rowNames[rowIdx]]}</CellContainer>);
        }
      }

      const outputMatrix = [];
      for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
        const row = [];
        for (let colIdx = 0; colIdx < matrix[0].length; colIdx++) {
          if (matrix[rowIdx][colIdx] == null)
            row.push(<CellContainer>NA</CellContainer>);
          else
            row.push(matrix[rowIdx][colIdx]);
        }
        outputMatrix.push(<Row>{row}</Row>);
      }

      return <Container>{outputMatrix}</Container>;
    }
    else
    {
      return <Container></Container>;
    }
  }

  return (
    <>
      <Container>
        <Row>
          <FlowContainer>
            <Row>
              {
                getColumnNames().map((column_name, col_index) => {
                  return (
                    column_name != "" &&
                    <React.Fragment>
                      {/* <ArrowColumn>
                        <Line /> <ReferenceContainer>{pointMetadata.sequence[col_index-1].input.start_z}</ReferenceContainer>
                      </ArrowColumn>
                      <Arrow /> */}
                      {col_index > 1 && <RightArrow style={{ width: '5rem', height: '2.5rem' }} />}
                      {col_index === 1 && <RectangleColumn></RectangleColumn>}
                      <RectangleColumn>
                        <strong>
                          {pointMetadata.sequence[col_index-1].input["magnifcation"]}-{column_name}
                        </strong>
                        (
                          {pointMetadata.sequence[col_index-1]["total_time"]/1000}sec
                        )
                      </RectangleColumn>
                    </React.Fragment>
                  )
                })
              }
              {/* {getColumnNames().length > 1 ? <> <RightArrow style={{ width: '5rem', height: '2.5rem', fill: 'transparent' }} /></> : <></>} */}
            </Row>
          </FlowContainer>
        </Row>
        <Row>
          <Container>
            {generateMatrix()}
          </Container>
        </Row>
      </Container>

      <CustomModal show={showModal} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Fine FM Distribution</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>{generateFineDistribution()}</Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </CustomModal>
    </>
  );
}

export default PointFlowScreen;

const CustomModal = styled(Modal)`
  .modal-dialog {
    max-width: 90%;
    width: 90%
  }
`;

const CustomCol = styled(Col)`
  canvas{
    width: 150px !important;
    height: 150px !important;
  }
`

const SizeCol = styled(Col)`
  canvas{
    width: 150px !important;
    height: 150px !important;
  }
`

const RectangleColumn = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #a1d2ef;
  border: 0.2px solid #f8f3f3;
  border-radius: 1rem;
  border: transparent;
  align-items: center;
  width: 65px;
  height: 40px;
  font-size: 20px;
  &:first-child{
    background-color: rgba(var(--bs-tertiary-bg-rgb), var(--bs-bg-opacity));
  }
`

const Line = styled(Col)`
  display: block;
  height: 5px;
  width: 70px;
  border: 0.2px solid #f8f3f3;
  border-top: 1px solid black;
  margin: 1em 0;
  margin-left: 20px;
`

const Arrow = styled.div`
  width: 4px;
  height: 25px;
  border-top: 2px solid #000;
  border-right: 2px solid #000;
  transform: rotate(45deg);
  margin-right: 20px;
`

const FlowContainer = styled(Container)`
  padding-top: 50px;
  padding-bottom: 50px;
  & > svg:last-child{
    path{
      fill: rgba(var(--bs-tertiary-bg-rgb), var(--bs-bg-opacity));
    }
  }
`

const ArrowColumn = styled(Col)`
  padding-right: 2px;
`

const ReferenceContainer = styled(Row)`
  padding-left: 20px;
  font-size: 15px;
  padding-left: 20px;
`

const CellContainer = styled(Col)`
  border: 0.05px solid #B6B6B4;
  border-collapse: collapse;
  display: flex; /* Use Flexbox */
  align-items: center; /* Center items vertically */
`