import React, { Component } from 'react';
import scifi from '../data/scifi.json';
import { Container, Row, Col, Card, ListGroup, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './DisplayBooks.css';

class ScifiBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayCount: 10
        };
    }

    handleChange = (e) => {
        this.setState({ displayCount: e.target.value });
    }


    render() {
        const { displayCount } = this.state;
        const displayedBooks = scifi.slice(0, displayCount);

        return (
            <Container fluid>
                <h1 as={Link} to='/scifi'>Scifi</h1>

                <Form>
                    <Form.Group>
                        <Form.Label>Numero di libri da visualizzare</Form.Label>
                        <Form.Control as="select" value={displayCount} onChange={this.handleChange}>
                            <option value="20">20</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                           
                        </Form.Control>
                    </Form.Group>
                </Form>

                <Row>
                    {displayedBooks.map((libro, index) => (
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
        );
    }
}

export default ScifiBook;
