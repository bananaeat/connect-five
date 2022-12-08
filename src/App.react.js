import Connect5 from './Connect5/Connect5.react';
import { Container, Row, Col } from "react-bootstrap";
import './App.css';

function App() {
  return (
    <Container>
      <Row>
        <Col/>
        <Col xs={16} sm={12} md={8} lg={6}>
          <Connect5 />
        </Col>
        <Col/>
      </Row>
    </Container>
  );
}

export default App;
