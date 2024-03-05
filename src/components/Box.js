import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ContainerExample from './Container';

    function Box() {
      return (
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={'public/Images/Squat.jpeg'} />
          <Card.Body>
            <Card.Title>Squat</Card.Title>
            <Card.Text>
    A squat is a strength exercise in which the trainee lowers their hips from a standing position 
    and then stands back up.
    During the descent, the hip and knee joints flex while the ankle joint dorsiflexes; conversely 
    the hip and knee joints extend and the ankle joint plantarflexes when standing up
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      );
    }
    
    export default Box;