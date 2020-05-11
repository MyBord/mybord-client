import * as React from 'react';
import { AuthenticationContextProvider } from 'context/authenticationContext';
import { HydrationContextProvider } from 'context/hydrationContext';

interface Props {
  children: React.ReactNode;
}

const SpaProviders: React.FC<Props> = ({ children }) => (
  <AuthenticationContextProvider>
    <HydrationContextProvider>
      {children}
    </HydrationContextProvider>
  </AuthenticationContextProvider>
);

export default SpaProviders;
