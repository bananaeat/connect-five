import { Amplify, Auth } from 'aws-amplify';
import awsmobile from './aws-exports';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import Connect5 from './Connect5/Connect5.react';
import TopMenu from './TopMenu.react';
import CommentSection from './Comment/CommentSection.react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import './App.css';

Amplify.configure(awsmobile);
Auth.configure(awsmobile);

function App({ signOut, user }) {
  return (
    <div>
      <BrowserRouter>
      <Container>
        <Row>
          <Col>
            <TopMenu signOut={signOut}/>
          </Col>
        </Row>
        <Routes>
          <Route path="/">
            <Route index element={<div>Hello, {user.username}</div>} />
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

export default withAuthenticator(App);
