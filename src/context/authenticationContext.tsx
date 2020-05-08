import * as React from 'react';

interface AuthenticationState {
  isAlreadyAuthenticated: boolean; // refers to if the user already has an authenticated session
  isAuthenticated: boolean; // is the user authenticated
  setAlreadyAuthenticatedStatus: (status: boolean) => void;
  setAuthenticationStatus: (status: boolean) => void;
}

const initialAuthenticationState: AuthenticationState = {
  isAlreadyAuthenticated: false,
  isAuthenticated: null,
  setAlreadyAuthenticatedStatus: () => {},
  setAuthenticationStatus: () => {},
};

const AuthenticationContext = React.createContext<AuthenticationState>(initialAuthenticationState);

export const AuthenticationContextProvider = (props: object): React.ReactElement => {
  const [isAuthenticated, setAuthenticationStatus] = React.useState(null);
  const [isAlreadyAuthenticated, setAlreadyAuthenticatedStatus] = React.useState(false);

  return (
    <AuthenticationContext.Provider
      value={{
        isAlreadyAuthenticated,
        isAuthenticated,
        setAlreadyAuthenticatedStatus,
        setAuthenticationStatus,
      }}
      {...props}
    />
  );
};

export const useAuthenticationContext = (): AuthenticationState => (
  React.useContext(AuthenticationContext)
);
