import * as React from 'react';
import { AuthenticationContextProvider } from 'context/authenticationContext/authenticationContext';
import { DashboardCardsContextProvider } from 'context/dashboardCardsContext/dashboardCardsContext';
import { DashboardFilterContextProvider }
  from 'context/dashboardFilterContext/dashboardFilterContext';
import { HydrationContextProvider } from 'context/hydrationContext/hydrationContext';
import { MultiSelectCardContextProvider }
  from 'context/multiSelectCardContext/multiSelectCardContext';

interface Props {
  children: React.ReactNode;
}

const SpaProviders: React.FC<Props> = ({ children }) => (
  <AuthenticationContextProvider>
    <DashboardCardsContextProvider>
      <DashboardFilterContextProvider>
        <HydrationContextProvider>
          <MultiSelectCardContextProvider>
            {children}
          </MultiSelectCardContextProvider>
        </HydrationContextProvider>
      </DashboardFilterContextProvider>
    </DashboardCardsContextProvider>
  </AuthenticationContextProvider>
);

export default SpaProviders;
