import * as React from 'react';
import App from 'app/app';
import Landing from 'landing/landing';
import { useCurrentUserContext } from 'context/currentUserContext/currentUserContext';
import initializeSpaWrapper from './initializeSpaWrapper';

// This component renders the application with a landing page or the actual application based
// on the users authentication status.
const SpaAuthentication: React.FC = () => {
  // const { isAuthenticated } = useCurrentUserContext();
  return <App />;
  // return <Landing />;
};

export default initializeSpaWrapper(SpaAuthentication);
