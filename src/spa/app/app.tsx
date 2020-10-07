import * as React from 'react';
import ErrorBoundary from 'app/errorBoundary/errorBoundary';
import Layout from 'layout/layout';
import Routes from 'routing/routes';
import { useAuthenticationContext } from 'context/authenticationContext/authenticationContext';

const App: React.FC = () => {
  const { currentUser } = useAuthenticationContext();

  return (
    <Layout>
      <ErrorBoundary>
        <Routes username={currentUser.username} />
      </ErrorBoundary>
    </Layout>
  );
};

export default App;
