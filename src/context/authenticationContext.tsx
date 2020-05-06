import * as React from 'react';

interface AuthenticationState {
  hasLoggedIn: boolean;
  hasLoggedOut: boolean;
  logInUser: () => void;
  logOutUser: () => void;
  resetLogOutStatus: () => void;
}

const initialAuthenticationState: AuthenticationState = {
  hasLoggedIn: false,
  hasLoggedOut: false,
  logInUser: () => {},
  logOutUser: () => {},
  resetLogOutStatus: () => {},
};

const AuthenticationContext = React.createContext<AuthenticationState>(initialAuthenticationState);

export const AuthenticationContextProvider = (props: object): React.ReactElement => {
  const [hasLoggedIn, setHasLoggedIn] = React.useState(false);
  const [hasLoggedOut, setHasLoggedOut] = React.useState(false);
  const logInUser = (): void => setHasLoggedIn(true);
  const logOutUser = (): void => setHasLoggedOut(true);
  const resetLogOutStatus = (): void => setHasLoggedOut(false);

  return (
    <AuthenticationContext.Provider
      value={{
        hasLoggedIn,
        hasLoggedOut,
        logInUser,
        logOutUser,
        resetLogOutStatus,
      }}
      {...props}
    />
  );
};

export const useAuthenticationContext = (): AuthenticationState => (
  React.useContext(AuthenticationContext)
);
