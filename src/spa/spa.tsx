import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'app/app';
import Landing from 'landing/landing';
import SpaProviders from 'context/spaProviders';
import { useAuthenticationContext } from 'context/authenticationContext';

const SpaContent: React.FC = () => {
  const { isAuthenticated } = useAuthenticationContext();
  if (isAuthenticated) {
    return <App />;
  }
  return <Landing />;
};

const Spa: React.FC = () => (
  <BrowserRouter>
    <SpaProviders>
      <SpaContent />
    </SpaProviders>
  </BrowserRouter>
);


export default Spa;
