import * as React from 'react';

type FormStatus = 'forgot' | 'login' | 'signUp';

interface LoginState {
  formStatus: FormStatus;
  isPasswordWeak: boolean;
  setFormStatus: (status: FormStatus) => void;
  setIsPasswordWeak: (isPasswordWeak: boolean) => void;
}

const initialLoginState: LoginState = {
  formStatus: 'login',
  isPasswordWeak: false,
  setFormStatus: () => {},
  setIsPasswordWeak: () => {},
};

const LoginContext = React.createContext<LoginState>(initialLoginState);

export const LoginContextProvider = (props: object): React.ReactElement => {
  const [formStatus, setFormStatus] = React.useState<FormStatus>('login');
  const [isPasswordWeak, setIsPasswordWeak] = React.useState<boolean>(false);

  return (
    <LoginContext.Provider
      value={{
        formStatus,
        isPasswordWeak,
        setFormStatus,
        setIsPasswordWeak,
      }}
      {...props}
    />
  );
};

export const useLoginContext = (): LoginState => React.useContext(LoginContext);
