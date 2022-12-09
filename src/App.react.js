import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';

import Connect5 from './Connect5/Connect5.react';
import TopMenu from './TopMenu.react';
import CommentSection from './Comment/CommentSection.react';
import { Container, Row, Col } from "react-bootstrap";
import { useState } from 'react';
import './App.css';

Amplify.configure(awsconfig);

function App() {
  const [page, setPage] = useState(0);
  var content;
  switch(page){
    case 0:
      content = (
        <div>Hello World!</div>
      );
      break;
    case 1:
      content = (<Row>
        <Col/>
        <Col xs={16} sm={12} md={8} lg={6}>
          <Connect5 />
        </Col>
        <Col/>
      </Row>);
      break;
    case 2:
      content = (<CommentSection />);
      break;
    default:
      content = <></>;
  }

  return (
    <Container>
      <Row>
        <Col>
          <TopMenu setPage={setPage}/>
        </Col>
      </Row>
      {content}
    </Container>
  );
}

export default App;
