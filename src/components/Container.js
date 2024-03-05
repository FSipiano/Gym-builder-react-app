import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Box from './Box';

function ContainerExample() {
  return (
<Container>
      <Row>
        <Col>
            <Box />
        </Col>
        <Col>
            <Box />
        </Col>
      </Row> 
 </Container>
      )
  }
 
export default ContainerExample;