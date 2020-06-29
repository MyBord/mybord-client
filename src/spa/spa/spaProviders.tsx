import * as React from 'react';
import { AuthenticationContextProvider } from 'context/authenticationContext/authenticationContext';
import { DashboardCardsContextProvider } from 'context/dashboardCardsContext/dashboardCardsContext';
import { HydrationContextProvider } from 'context/hydrationContext/hydrationContext';
import { MultiSelectCardContextProvider }
  from 'context/multiSelectCardContext/multiSelectCardContext';

interface Props {
  children: React.ReactNode;
}

const SpaProviders: React.FC<Props> = ({ children }) => (
  <AuthenticationContextProvider>
    <DashboardCardsContextProvider>
      <HydrationContextProvider>
        <MultiSelectCardContextProvider>
          {children}
        </MultiSelectCardContextProvider>
      </HydrationContextProvider>
    </DashboardCardsContextProvider>
  </AuthenticationContextProvider>
);

export default SpaProviders;
