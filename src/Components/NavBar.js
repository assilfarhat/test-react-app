import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export function NavBar() {
    
  
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand >MyStore</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"Products/list"}>Products</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }