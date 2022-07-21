import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CaptianPhoto from "./Capt.PNG"

function GitHubCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= "CaptianPhoto" />
      <Card.Body>
        <Card.Title>Robbie Behm</Card.Title>
        <Card.Text>
          Robbie started his career as a national athlete of the year finalist before succoming to injuries the next week. He then turned his attention to programming.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default GitHubCard;