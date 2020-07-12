import * as React from 'react';
const App = React.lazy(() => import('app/app'));
import Landing from 'landing/landing';
import { useAuthenticationContext } from 'context/authenticationContext/authenticationContext';
import initializeSpaWrapper from './initializeSpaWrapper';

// This component renders the application with a landing page or the actual application based
// on the users authentication status.
const SpaContainer: React.FC = () => {
  const { isAuthenticated } = useAuthenticationContext();
  if (isAuthenticated) {
    return <App />;
  }
  return <Landing />;
};

export default initializeSpaWrapper(SpaContainer);
