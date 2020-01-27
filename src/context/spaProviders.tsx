import * as React from 'react';
import { AuthenticationContextProvider } from './authenticationContext';

interface Props {
  children: React.ReactNode;
}

const SpaProviders: React.FC<Props> = ({ children }) => (
  <AuthenticationContextProvider>
    {children}
  </AuthenticationContextProvider>
);

export default SpaProviders;
