import * as React from 'react';
import ErrorBoundary from 'neutrons/errorBoundary/errorBoundary';
import Routes from 'landing/routing/routes';
import { LandingContextProvider } from 'context/landingContext/landingContext';
import Layout from './layout/layout';

const Landing: React.FC = () => (
  <LandingContextProvider>
    <Layout>
      <ErrorBoundary>
        <Routes />
      </ErrorBoundary>
    </Layout>
  </LandingContextProvider>
);

export default Landing;
