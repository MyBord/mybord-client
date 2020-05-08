import * as React from 'react';

interface AuthenticationState {
  isAuthenticated: boolean;
  setAuthenticationStatus: (status: boolean) => void;
}

const initialAuthenticationState: AuthenticationState = {
  isAuthenticated: false,
  setAuthenticationStatus: () => {},
};

const AuthenticationContext = React.createContext<AuthenticationState>(initialAuthenticationState);

export const AuthenticationContextProvider = (props: object): React.ReactElement => {
  const [isAuthenticated, setAuthenticationStatus] = React.useState(false);

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated,
        setAuthenticationStatus,
      }}
      {...props}
    />
  );
};

export const useAuthenticationContext = (): AuthenticationState => (
  React.useContext(AuthenticationContext)
);
