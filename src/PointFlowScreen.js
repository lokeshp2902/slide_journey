import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LineChart from './LineChart';
import React from 'react';

import { useSlideContext } from './SlideProvider';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

function PointFlowScreen()
{
  const {pointMetadata} = useSlideContext();

  const getRowNames = () =>
  {
    const input_keys = [""];
    // console.log(pointMetadata);

    if(pointMetadata)
    {
      let idx = 0;
      for( idx = 0; idx < pointMetadata.sequence.length; idx++)
      {
        if(pointMetadata.sequence[idx]["module"] === "fine")
        {
          break;
        }
      }

      if(!(idx >= 0 && idx < pointMetadata.sequence.length))
      {
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
    input_keys.push("focus_metric_distribution");
    // console.log(input_keys);
    return input_keys;
  }

  const getColumnNames = () =>
  {
    const input_keys = [""];
    if(pointMetadata)
    {
      for (let i = 0; i < pointMetadata.sequence.length; i++) {
        input_keys.push(pointMetadata.sequence[i].module)
      }
    }
    return input_keys;
  }

  const generateMatrix = () => {
    let rowNames = getRowNames();
    let colNames = getColumnNames();

    if(rowNames.length > 1 && colNames.length > 1)
    {
      const matrix = [];
      for (let rowIdx = 0; rowIdx < rowNames.length; rowIdx++) {
        const row = []
        for(let colIdx = 0; colIdx < colNames.lengthl; colIdx++){
          row.push(null);
        }
        matrix.push(row)
      }

      for(let colIdx = 0; colIdx < colNames.length; colIdx++)
      {
        const column_name = colNames[colIdx].split("_").join(" ");
        matrix[0][colIdx] = <Col><strong>{column_name}</strong></Col>
      }

      for(let rowIdx = 0; rowIdx < rowNames.length; rowIdx++)
      {
        const row_name = rowNames[rowIdx].split("_").join(" ");
        matrix[rowIdx][0] = <Col><strong>{row_name}</strong></Col>
      }

      for(let idx = 0; idx < pointMetadata.sequence.length; idx++)
      {
        for(let rowIdx = 0; rowIdx < rowNames.length; rowIdx++)
        {
          if(rowNames[rowIdx] in pointMetadata.sequence[idx]["output"])
          {
            if(rowNames[rowIdx] === "focus_metric_distribution")
            {
              // console.log("data", pointMetadata.sequence[idx]["output"][rowNames[rowIdx]])
              matrix[rowIdx][idx+1] = <CustomCol><LineChart flow={pointMetadata.sequence[idx]["output"][rowNames[rowIdx]]}/></CustomCol>
            }
            else if(rowNames[rowIdx] === "image_path")
            {
              matrix[rowIdx][idx+1] = <Col><img width={150} height={75} src={pointMetadata.sequence[idx]["output"][rowNames[rowIdx]]}/></Col>
            }
            else
            {
              matrix[rowIdx][idx+1] = <Col>{pointMetadata.sequence[idx]["output"][rowNames[rowIdx]]}</Col>
            }
          }
          if(rowNames[rowIdx] in pointMetadata.sequence[idx]["input"])
            matrix[rowIdx][idx+1] = <Col>{pointMetadata.sequence[idx]["input"][rowNames[rowIdx]]}</Col>
        }
      }

      const outputMatrix = [];
      for(let rowIdx = 0; rowIdx < matrix.length; rowIdx++)
      {
        const row = [];
        for(let colIdx = 0; colIdx < matrix[0].length; colIdx++)
        {
          if(matrix[rowIdx][colIdx] == null)
            row.push(<Col>NA</Col>);
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

  return(
    <>
      <Container>
        <Row>
          <FlowContainer>
            <Row>
              {
                getColumnNames().map((column_name, col_index) => {
                  return(
                    column_name != "" &&
                    <React.Fragment>
                      <ArrowColumn>
                        <Line /> <ReferenceContainer>{pointMetadata.sequence[col_index-1].input.start_z}</ReferenceContainer>
                      </ArrowColumn>
                      <Arrow />
                      <RectangleColumn>{column_name}</RectangleColumn>
                    </React.Fragment>
                  )
                })
              }
              {getColumnNames().length > 1 ?<> <Line /><Arrow /></>  : <></>}
              </Row>
          </FlowContainer>
        </Row>
        <Row>
          <Container>
            {generateMatrix()}
          </Container>
        </Row>
      </Container>
    </>
  );
}

export default PointFlowScreen;

const CustomCol = styled(Col)`
canvas{
  width: 150px !important;
  height: 150px !important;
}
`

const RectangleColumn = styled(Col)`
  background-color: #a1d2ef;
  border: 0.2px solid #f8f3f3;
  border: transparent;
  align-items: center;
  width: 85px;
  height: 40px;
  font-size: 20px;
  padding-left: 20px;
  margin-left: 10px;
  margin-right: 10px;
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
`

const ArrowColumn = styled(Col)`
  padding-right: 2px;
`

const ReferenceContainer = styled(Row)`
  padding-left: 20px;
  font-size: 15px;
  padding-left: 20px;
`