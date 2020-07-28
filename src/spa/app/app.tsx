import * as React from 'react';
import { Link } from 'react-router-dom';
import ErrorBoundary from 'app/errorBoundary/errorBoundary';
import Layout from 'layout/layout';
import Routes from 'routing/routes';

const App: React.FC = () => (
  <div>
    <Link to="/myBord">MyBord</Link>
    <Link to="/about">About</Link>
    <Link to="/trending">Trending</Link>
    <Layout>
      <ErrorBoundary>
        <Routes />
      </ErrorBoundary>
    </Layout>
  </div>
);

export default App;
