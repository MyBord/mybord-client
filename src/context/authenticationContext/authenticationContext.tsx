import * as React from 'react';

interface CurrentUser {
  email: string;
  username: string;
}

interface AuthenticationState {
  currentUser: CurrentUser;
  isAuthenticated: boolean;
  setAuthenticationStatus: (status: boolean) => void;
  setCurrentUser: (currentUser: CurrentUser) => void;
}

const initialAuthenticationState: AuthenticationState = {
  currentUser: null,
  isAuthenticated: null,
  setAuthenticationStatus: () => {},
  setCurrentUser: () => {},
};

const AuthenticationContext = React.createContext<AuthenticationState>(initialAuthenticationState);

export const AuthenticationContextProvider = (props: object): React.ReactElement => {
  const [currentUser, setCurrentUser] = React.useState<CurrentUser>(null);
  const [isAuthenticated, setAuthenticationStatus] = React.useState<boolean>(null);

  return (
    <AuthenticationContext.Provider
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

export const useAuthenticationContext = (): AuthenticationState => (
  React.useContext(AuthenticationContext)
);
