import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'

function navbar() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img src="/assets/imgs/forTheHorde.webp" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <NavDropdown title="Generi" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#">Fantasy</NavDropdown.Item>
              <NavDropdown.Item href="#">History</NavDropdown.Item>
              <NavDropdown.Item href="#">Horror</NavDropdown.Item>
              <NavDropdown.Item href="#">Romance</NavDropdown.Item>
              <NavDropdown.Item href="#">Scifi</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;