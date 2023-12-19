import React from "react";
import fantasy from '../data/fantasy.json';

import { Container, Row, Col, Card, ListGroup, Carousel } from "react-bootstrap";
import './DisplayBooks.css';

function fantasyBook() {
    return (
        <Container fluid>
            <h1>Fantasy</h1>

            <Row>
                {fantasy.map((libro, index) => (
                    <Col key={index} md={2} xs={12} sm={6}>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={libro.img} className="img-fluid" />
                            <Card.Body>
                                <Card.Title>{libro.title}</Card.Title>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>{libro.category} - {libro.price} €</ListGroup.Item>
                                <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default fantasyBook();