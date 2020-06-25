import * as React from 'react';
import { AuthenticationContextProvider } from 'context/authenticationContext/authenticationContext';
import { CardContextProvider } from 'context/cardContext/cardContext';
import { DashboardCardsContextProvider } from 'context/dashboardCardsContext/dashboardCardsContext';
import { HydrationContextProvider } from 'context/hydrationContext/hydrationContext';

interface Props {
  children: React.ReactNode;
}

const SpaProviders: React.FC<Props> = ({ children }) => (
  <AuthenticationContextProvider>
    <CardContextProvider>
      <DashboardCardsContextProvider>
        <HydrationContextProvider>
          {children}
        </HydrationContextProvider>
      </DashboardCardsContextProvider>
    </CardContextProvider>
  </AuthenticationContextProvider>
);

export default SpaProviders;
