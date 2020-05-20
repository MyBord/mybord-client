import * as React from 'react';

type FormStatus = 'forgot' | 'login' | 'signUp';

interface LoginState {
  alertMessage: string;
  formStatus: FormStatus;
  isAuthenticationWaiting: boolean;
  isPasswordWeak: boolean;
  setAlertMessage: (alertMessage: string) => void;
  setFormStatus: (status: FormStatus) => void;
  setIsAuthenticationWaiting: (isAuthenticationWaiting: boolean) => void
  setIsPasswordWeak: (isPasswordWeak: boolean) => void;
}

const initialLoginState: LoginState = {
  alertMessage: null,
  formStatus: 'login',
  isAuthenticationWaiting: false,
  isPasswordWeak: false,
  setAlertMessage: () => {},
  setFormStatus: () => {},
  setIsAuthenticationWaiting: () => {},
  setIsPasswordWeak: () => {},
};

const LoginContext = React.createContext<LoginState>(initialLoginState);

export const LoginContextProvider = (props: object): React.ReactElement => {
  const [formStatus, setFormStatus] = React.useState<FormStatus>('login');
  const [alertMessage, setAlertMessage] = React.useState<string>(null);
  const [isAuthenticationWaiting, setIsAuthenticationWaiting] = React.useState<boolean>(false);
  const [isPasswordWeak, setIsPasswordWeak] = React.useState<boolean>(false);

  return (
    <LoginContext.Provider
      value={{
        alertMessage,
        formStatus,
        isAuthenticationWaiting,
        isPasswordWeak,
        setAlertMessage,
        setFormStatus,
        setIsAuthenticationWaiting,
        setIsPasswordWeak,
      }}
      {...props}
    />
  );
};

export const useLoginContext = (): LoginState => React.useContext(LoginContext);
