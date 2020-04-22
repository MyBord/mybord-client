import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useLazyQuery } from '@apollo/react-hooks';
import App from 'app/app';
import Landing from 'landing/landing';
import SpaProviders from 'context/spaProviders';
import { IS_AUTHENTICATED } from 'schema/user';
import { useAuthenticationContext } from 'context/authenticationContext';

const SpaContent: React.FC = () => {
  const [isAuthenticatedQuery, { called, data, loading }] = useLazyQuery(IS_AUTHENTICATED);
  const { authenticateUser, isAuthenticated } = useAuthenticationContext();

  // See if the user is already authenticated, if they are, then deliver them to the app. If
  // they are not, then deliver them to the login page where they can login and
  // `isAuthenticated` will get updated.
  React.useEffect(() => {
    isAuthenticatedQuery();
  }, []);

  if (called && !loading) {
    if (data.isAuthenticated) {
      authenticateUser();
    }
  }

  if (isAuthenticated) {
    return <App />;
  }
  return <Landing />;
};

const Spa: React.FC = () => (
  <BrowserRouter>
    <SpaProviders>
      <App />
    </SpaProviders>
  </BrowserRouter>
);

export default Spa;
