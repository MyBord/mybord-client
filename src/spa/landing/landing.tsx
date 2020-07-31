import * as React from 'react';
import ErrorBoundary from 'landing/errorBoundary/errorBoundary';
import Routes from 'landing/routing/routes';
import LandingProviders from './landingProviders';
import Layout from './layout/layout';

const Landing: React.FC = () => (
  <LandingProviders>
    <Layout>
      <ErrorBoundary>
        <Routes />
      </ErrorBoundary>
    </Layout>
  </LandingProviders>
);

export default Landing;
