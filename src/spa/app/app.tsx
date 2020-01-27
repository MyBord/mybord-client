import * as React from 'react';
import ErrorBoundary from 'app/errorBoundary/errorBoundary';
import LandingPage from 'pages/landingPage/landingPage';
import Layout from 'layout/layout';
import Routes from 'routing/routes';
import { useAuthenticationContext } from 'context/authenticationContext';

const App: React.FC = () => {
  const { userAuthentication } = useAuthenticationContext();

  if (userAuthentication.isAuthenticated) {
    return (
      <Layout>
        <ErrorBoundary>
          <Routes />
        </ErrorBoundary>
      </Layout>
    );
  }

  return <LandingPage />;
};

export default App;
