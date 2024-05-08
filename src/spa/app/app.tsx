import * as React from 'react';
import ErrorBoundary from 'neutrons/errorBoundary/errorBoundary';
import Layout from 'layout/layout';
import Routes from 'routing/routes';
import { useCurrentUserContext } from 'context/currentUserContext/currentUserContext';

const App: React.FC = () => {
  return (
    <Layout>
      <ErrorBoundary>
        <Routes />
      </ErrorBoundary>
    </Layout>
  );
};

export default App;
