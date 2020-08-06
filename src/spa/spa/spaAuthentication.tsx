import * as React from 'react';
import Footer from "shared/footer/footer";
const App = React.lazy(() => import('app/app'));
import Landing from 'landing/landing';
import { useAuthenticationContext } from 'context/authenticationContext/authenticationContext';
import initializeSpaWrapper from './initializeSpaWrapper';

// This component renders the application with a landing page or the actual application based
// on the users authentication status.
const SpaAuthentication: React.FC = () => (
  <div style={{ width: '100%' }}>
    <Footer />
  </div>
);

export default initializeSpaWrapper(SpaAuthentication);
