import * as React from 'react';
import App from 'app/app';
import Landing from 'landing/landing';
import { useAuthenticationContext } from 'context/authenticationContext';
import initializeSpaWrapper from './initializeSpaWrapper';

// This component renders the application with a landing page or the actual application based
// on the users authentication status.
const SpaContainer: React.FC = () => {
  return <App />;
};

export default initializeSpaWrapper(SpaContainer);
