import * as React from 'react';
import { CurrentUserContextProvider } from 'context/currentUserContext/currentUserContext';
import { HydrationContextProvider } from 'context/hydrationContext/hydrationContext';
import { ModalContextProvider } from 'context/modalContext/modalContext';
import { MultiSelectCardContextProvider }
  from 'context/multiSelectCardContext/multiSelectCardContext';
import { ToastContextProvider } from 'context/toastContext/toastContext';
import { UserDashboardContextProvider } from 'context/userDashboardContext/userDashboardContext';

interface Props {
  children: React.ReactNode;
}

const SpaProviders: React.FC<Props> = ({ children }) => (
  <CurrentUserContextProvider>
    <HydrationContextProvider>
      <ModalContextProvider>
        <MultiSelectCardContextProvider>
          <ToastContextProvider>
            <UserDashboardContextProvider>
              {children}
            </UserDashboardContextProvider>
          </ToastContextProvider>
        </MultiSelectCardContextProvider>
      </ModalContextProvider>
    </HydrationContextProvider>
  </CurrentUserContextProvider>
);

export default SpaProviders;
