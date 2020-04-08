import * as React from 'react';

interface AuthenticationState {
  authenticateUser: () => void;
  isAuthenticated: boolean;
  unAuthenticateUser: () => void;
}

const initialAuthenticationState: AuthenticationState = {
  isAuthenticated: false,
  authenticateUser: () => {},
  unAuthenticateUser: () => {},
};

const AuthenticationContext = React.createContext<AuthenticationState>(initialAuthenticationState);

export const AuthenticationContextProvider = (props: object): React.ReactElement => {
  const [isAuthenticated, setisAuthenticated] = React.useState(false);
  const authenticateUser = (): void => setisAuthenticated(true);
  const unAuthenticateUser = (): void => setisAuthenticated(false);

  return (
    <AuthenticationContext.Provider
      value={{ authenticateUser, isAuthenticated, unAuthenticateUser }}
      {...props}
    />
  );
};

export const useAuthenticationContext = (): AuthenticationState => (
  React.useContext(AuthenticationContext)
);
