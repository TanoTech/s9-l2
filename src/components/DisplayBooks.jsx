import React from "react";
import fantasy from '../data/fantasy.json';
import history from '../data/history.json';
import horror from '../data/horror.json';
import romance from '../data/romance.json';
import scifi from '../data/scifi.json';
import { Container, Row, Col, Card, ListGroup, Carousel } from "react-bootstrap";
import './DisplayBooks.css';

const bookCase = () => {

    return (
        <Container fluid>
            <h1>Fantasy</h1>
            <Carousel>
                <Carousel.Item>
                    <Row>
                        {fantasy.slice(0, 6).map((libro, index) => (
                            <Col key={index} md={2} xs={12} sm={6}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={libro.img} className="img-fluid" />

                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                        <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        {fantasy.slice(6, 12).map((libro, index) => (
                            <Col key={index} md={2} xs={12} sm={6}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={libro.img} />

                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                        <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        {fantasy.slice(12, 18).map((libro, index) => (
                            <Col key={index} md={2} xs={12} sm={6}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={libro.img} />

                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                        <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        {fantasy.slice(18, 24).map((libro, index) => (
                            <Col key={index} md={2} xs={12} sm={6}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={libro.img} />

                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                        <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        {fantasy.slice(24, 30).map((libro, index) => (
                            <Col key={index} md={2} xs={12} sm={6}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={libro.img} />

                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                        <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
            </Carousel>
            <h1>History</h1>
            <Carousel>
                <Carousel.Item>
                    <Row>
                        {history.slice(0, 6).map((libro, index) => (
                            <Col key={index} md={2} xs={12} sm={6}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={libro.img} />

                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                        <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        {history.slice(6, 12).map((libro, index) => (
                            <Col key={index} md={2} xs={12} sm={6}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={libro.img} />
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                        <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        {history.slice(12, 18).map((libro, index) => (
                            <Col key={index} md={2} xs={12} sm={6}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={libro.img} />
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                        <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        {history.slice(18, 24).map((libro, index) => (
                            <Col key={index} md={2} xs={12} sm={6}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={libro.img} />
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                        <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        {history.slice(24, 30).map((libro, index) => (
                            <Col key={index} md={2} xs={12} sm={6}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={libro.img} />
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                        <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
            </Carousel>
            <h1>Horror</h1>
            <Carousel>
                <Carousel.Item>
                    <Row>
                        {horror.slice(0, 6).map((libro, index) => (
                            <Col key={index} md={2} xs={12} sm={6}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={libro.img} />
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                        <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        {horror.slice(6, 12).map((libro, index) => (
                            <Col key={index} md={2} xs={12} sm={6}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={libro.img} />
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                        <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        {horror.slice(12, 18).map((libro, index) => (
                            <Col key={index} md={2} xs={12} sm={6}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={libro.img} />
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                        <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        {horror.slice(18, 24).map((libro, index) => (
                            <Col key={index} md={2} xs={12} sm={6}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={libro.img} />
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                        <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        {horror.slice(24, 30).map((libro, index) => (
                            <Col key={index} md={2} xs={12} sm={6}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={libro.img} />
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                        <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
            </Carousel>
            <h1>Romance</h1>
            <Carousel>
                <Carousel.Item>
                    <Row>
                        {romance.slice(0, 6).map((libro, index) => (
                            <Col key={index} md={2} xs={12} sm={6}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={libro.img} />
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                        <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        {romance.slice(6, 12).map((libro, index) => (
                            <Col key={index} md={2} xs={12} sm={6}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={libro.img} />
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                        <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        {romance.slice(12, 18).map((libro, index) => (
                            <Col key={index} md={2} xs={12} sm={6}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={libro.img} />
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                        <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        {romance.slice(18, 24).map((libro, index) => (
                            <Col key={index} md={2} xs={12} sm={6}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={libro.img} />
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                        <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        {romance.slice(24, 30).map((libro, index) => (
                            <Col key={index} md={2} xs={12} sm={6}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={libro.img} />
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                        <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
            </Carousel>
            <h1>Scifi</h1>
            <Carousel>
                <Carousel.Item>
                    <Row>
                        {scifi.slice(0, 6).map((libro, index) => (
                            <Col key={index} md={2} xs={12} sm={6}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={libro.img} />

                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                        <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        {scifi.slice(6, 12).map((libro, index) => (
                            <Col key={index} md={2} xs={12} sm={6}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={libro.img} />

                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                        <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        {scifi.slice(12, 18).map((libro, index) => (
                            <Col key={index} md={2} xs={12} sm={6}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={libro.img} />
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                        <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        {scifi.slice(18, 24).map((libro, index) => (
                            <Col key={index} md={2} xs={12} sm={6}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={libro.img} />
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                        <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        {scifi.slice(24, 30).map((libro, index) => (
                            <Col key={index} md={2} xs={12} sm={6}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={libro.img} />
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                        <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}


export default bookCase