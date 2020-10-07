import * as React from 'react';
import ErrorBoundary from 'app/errorBoundary/errorBoundary';
import Layout from 'layout/layout';
import Routes from 'routing/routes';
import { useCurrentUserContext } from 'context/currentUserContext/currentUserContext';

const App: React.FC = () => {
  const { currentUser } = useCurrentUserContext();

  return (
    <Layout>
      <ErrorBoundary>
        <Routes username={currentUser.username} />
      </ErrorBoundary>
    </Layout>
  );
};

export default App;
