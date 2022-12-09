import { Amplify } from 'aws-amplify';
import awsmobile from './aws-exports';

import Connect5 from './Connect5/Connect5.react';
import TopMenu from './TopMenu.react';
import CommentSection from './Comment/CommentSection.react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import './App.css';

Amplify.configure(awsmobile);

function App() {
  return (
    <div>
      <BrowserRouter>
      <Container>
        <Row>
          <Col>
            <TopMenu/>
          </Col>
        </Row>
        <Routes>
          <Route path="/">
            <Route index element={<div>Hello World!</div>} />
            <Route path="connect5" element={<Connect5 />} />
            <Route path="comment" element={<CommentSection />} />

            {/* Using path="*"" means "match anything", so this route
                  acts like a catch-all for URLs that we don't have explicit
                  routes for. */}
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </Container>
      </BrowserRouter>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
