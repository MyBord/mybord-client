import * as React from 'react';

interface UserAuthentication {
  isAuthenticated: boolean;
}

interface AuthenticationState {
  userAuthentication: UserAuthentication;
  authenticateUser: () => void;
  unAuthenticateUser: () => void;
}

const initialAuthenticationState: AuthenticationState = {
  userAuthentication: {
    isAuthenticated: false,
  },
  authenticateUser: () => {},
  unAuthenticateUser: () => {},
};

const AuthenticationContext = React.createContext<AuthenticationState>(initialAuthenticationState);

export const AuthenticationContextProvider = (props: object): React.ReactElement => {
  const [isAuthenticated, setisAuthenticated] = React.useState(false);
  const authenticateUser = (): void => setisAuthenticated(true);
  const unAuthenticateUser = (): void => setisAuthenticated(false);

  const userAuthentication = {
    isAuthenticated,
  };

  return (
    <AuthenticationContext.Provider
      value={{ userAuthentication, authenticateUser, unAuthenticateUser }}
      {...props}
    />
  );
};

export const useAuthenticationContext = (): AuthenticationState => React.useContext(AuthenticationContext);
