import * as React from 'react';
import ErrorBoundary from 'landing/errorBoundary/errorBoundary';
import Routes from 'landing/routing/routes';
import Layout from './layout/layout';

const Landing: React.FC = () => (
  <Layout>
    <ErrorBoundary>
      <Routes />
    </ErrorBoundary>
  </Layout>
);

export default Landing;
