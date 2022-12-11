import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from "react-bootstrap";

function TopMenu(props) {
    return (
      <Navbar collapseOnSelect bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">GameCollection</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/connect5">Connect5</Nav.Link>
              <Nav.Link href="/comment">Comment</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link onClick={props.signOut}>Sign Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    ); 
}

export default TopMenu;