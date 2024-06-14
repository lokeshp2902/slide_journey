import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TableConverter({box}){
  return (
    <>
      <center><h3>FOV : {box.key} </h3></center>
      <Row>
        <Col key={0}></Col>
        {
          box.value.probing_sequence.map((value, index) => (
            <Col key={index}>{value.module}</Col>
          ))
        }
      </Row>

      {

      }
    </>
  );
}

export default TableConverter;