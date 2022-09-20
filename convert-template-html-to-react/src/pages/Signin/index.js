import Container from 'react-bootstrap/Container';
import { Row, Col, Card } from 'react-bootstrap';
import { useState } from 'react';
import PForm from './form';
// import axios from '../../configs';
import { useNavigate } from 'react-router-dom';

export default function Signin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    // TODO: hit api signin and set value token
    // const res = await axios.post(`/api/v1/auth/sign-in`, form);
    localStorage.setItem('token', true);
    setIsLoading(false);

    navigate('/');
  };

  return (
    <Container>
      <Row className='my-5'>
        <Col md={{ span: 6, offset: 3 }}>
          <Card body>
            <PForm
              form={form}
              handleChange={handleChange}
              isLoading={isLoading}
              handleSubmit={handleSubmit}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
