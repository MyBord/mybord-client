import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'app/app';
import Landing from 'landing/landing';
import SpaProviders from 'context/spaProviders';
import { useAuthenticationContext } from 'context/authenticationContext';

const SpaContent: React.FC = () => {
  const { userAuthentication } = useAuthenticationContext();
  if (userAuthentication.isAuthenticated) {
    return <App />;
  }
  return <Landing />;
};

// const SpaContent: React.FC = () => <App />;

const Spa: React.FC = () => (
  <BrowserRouter>
    <SpaProviders>
      <SpaContent />
    </SpaProviders>
  </BrowserRouter>
);


export default Spa;
