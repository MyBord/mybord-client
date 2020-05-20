import * as React from 'react';

type FormStatus = 'forgot' | 'login' | 'signUp';

interface LoginState {
  formStatus: FormStatus;
  hasIncorrectCreds: boolean;
  isPasswordWeak: boolean;
  setFormStatus: (status: FormStatus) => void;
  setHasIncorrectCreds: (hasIncorrectCreds: boolean) => void;
  setIsPasswordWeak: (isPasswordWeak: boolean) => void;
}

const initialLoginState: LoginState = {
  formStatus: 'login',
  hasIncorrectCreds: false,
  isPasswordWeak: false,
  setFormStatus: () => {},
  setHasIncorrectCreds: () => {},
  setIsPasswordWeak: () => {},
};

const LoginContext = React.createContext<LoginState>(initialLoginState);

export const LoginContextProvider = (props: object): React.ReactElement => {
  const [formStatus, setFormStatus] = React.useState<FormStatus>('login');
  const [hasIncorrectCreds, setHasIncorrectCreds] = React.useState<boolean>(false);
  const [isPasswordWeak, setIsPasswordWeak] = React.useState<boolean>(false);

  return (
    <LoginContext.Provider
      value={{
        formStatus,
        hasIncorrectCreds,
        isPasswordWeak,
        setFormStatus,
        setHasIncorrectCreds,
        setIsPasswordWeak,
      }}
      {...props}
    />
  );
};

export const useLoginContext = (): LoginState => React.useContext(LoginContext);
