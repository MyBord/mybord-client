import * as React from 'react';
import { AuthenticationContextProvider } from 'context/authenticationContext/authenticationContext';
import { HydrationContextProvider } from 'context/hydrationContext/hydrationContext';
import { ModalContextProvider } from 'context/modalContext/modalContext';
import { MultiSelectCardContextProvider }
  from 'context/multiSelectCardContext/multiSelectCardContext';
import { UserDashboardContextProvider } from 'context/userDashboardContext/userDashboardContext';

interface Props {
  children: React.ReactNode;
}

const SpaProviders: React.FC<Props> = ({ children }) => (
  <AuthenticationContextProvider>
    <HydrationContextProvider>
      <ModalContextProvider>
        <MultiSelectCardContextProvider>
          <UserDashboardContextProvider>
            {children}
          </UserDashboardContextProvider>
        </MultiSelectCardContextProvider>
      </ModalContextProvider>
    </HydrationContextProvider>
  </AuthenticationContextProvider>
);

export default SpaProviders;
