import * as React from 'react';
import { AuthenticationContextProvider } from 'context/authenticationContext/authenticationContext';
import { CardContextProvider } from 'context/cardContext/cardContext';
import { HydrationContextProvider } from 'context/hydrationContext/hydrationContext';

interface Props {
  children: React.ReactNode;
}

const SpaProviders: React.FC<Props> = ({ children }) => (
  <AuthenticationContextProvider>
    <CardContextProvider>
      <HydrationContextProvider>
        {children}
      </HydrationContextProvider>
    </CardContextProvider>
  </AuthenticationContextProvider>
);

export default SpaProviders;
