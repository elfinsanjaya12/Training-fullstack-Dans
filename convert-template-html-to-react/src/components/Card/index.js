import PButton from '../Button';
import Card from 'react-bootstrap/Card';

function PCard({ body, title, img }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <PButton variant='primary'>Add To Cart</PButton>
      </Card.Body>
    </Card>
  );
}

export default PCard;
