import React from 'react';
import { menus } from '../../data/menus';
import PCard from '../../components/Card';
import { Col, Container, Row } from 'react-bootstrap';

export default function Menus() {
  return (
    <Container className='mt-5'>
      <Row>
        {menus.map((data) => (
          <Col sm={4} key={data.id} className='my-2'>
            <PCard img={data.cover} title={data.title} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
