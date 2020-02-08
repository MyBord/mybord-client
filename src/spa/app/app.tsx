import * as React from 'react';
import ErrorBoundary from 'app/errorBoundary/errorBoundary';
import Layout from 'layout/layout';
import Routes from 'routing/routes';

const App: React.FC = () => (
  <Layout>
    <ErrorBoundary>
      <Routes />
    </ErrorBoundary>
  </Layout>
);

export default App;
