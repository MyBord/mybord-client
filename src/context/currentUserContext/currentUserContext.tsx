import * as React from 'react';

interface CurrentUser {
  email: string;
  username: string;
}

interface CurrentUserState {
  currentUser: CurrentUser;
  isAuthenticated: boolean;
  setAuthenticationStatus: (status: boolean) => void;
  setCurrentUser: (currentUser: CurrentUser) => void;
}

const initialCurrentUserState: CurrentUserState = {
  currentUser: null,
  isAuthenticated: null,
  setAuthenticationStatus: () => {},
  setCurrentUser: () => {},
};

const CurrentUserContext = React.createContext<CurrentUserState>(initialCurrentUserState);

export const CurrentUserContextProvider = (props: object): React.ReactElement => {
  const [currentUser, setCurrentUser] = React.useState<CurrentUser>(null);
  const [isAuthenticated, setAuthenticationStatus] = React.useState<boolean>(null);

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        isAuthenticated,
        setAuthenticationStatus,
        setCurrentUser,
      }}
      {...props}
    />
  );
};

export const useCurrentUserContext = (): CurrentUserState => React.useContext(CurrentUserContext);
