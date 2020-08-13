import * as React from 'react';
import { AuthenticationContextProvider } from 'context/authenticationContext/authenticationContext';
import { DashboardCardsContextProvider } from 'context/dashboardCardsContext/dashboardCardsContext';
import { HydrationContextProvider } from 'context/hydrationContext/hydrationContext';
import { ModalContextProvider } from 'context/modalContext/modalContext';
import { MultiSelectCardContextProvider }
  from 'context/multiSelectCardContext/multiSelectCardContext';

interface Props {
  children: React.ReactNode;
}

const SpaProviders: React.FC<Props> = ({ children }) => (
  <AuthenticationContextProvider>
    <DashboardCardsContextProvider>
      <HydrationContextProvider>
        <ModalContextProvider>
          <MultiSelectCardContextProvider>
            {children}
          </MultiSelectCardContextProvider>
        </ModalContextProvider>
      </HydrationContextProvider>
    </DashboardCardsContextProvider>
  </AuthenticationContextProvider>
);

export default SpaProviders;
