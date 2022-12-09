import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from "react-bootstrap";

function TopMenu(props) {
    return (
      <Navbar bg="light" expand="lg">
        <Container style={{height: '10vh'}}>
          <Navbar.Brand href="#home">GameCollection</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" onClick={() => {props.setPage(0);}}>Home</Nav.Link>
              <Nav.Link href="#Connect5" onClick={() => {props.setPage(1);}}>Connect5</Nav.Link>
              <Nav.Link href="#Comment" onClick={() => {props.setPage(2);}}>Comment</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    ); 
}

export default TopMenu;