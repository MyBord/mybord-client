import * as React from 'react';

type FormStatus = 'forgot' | 'login' | 'signUp';

interface LoginState {
  formStatus: FormStatus;
  setFormStatus: (status: FormStatus) => void;
}

const initialLoginState: LoginState = {
  formStatus: 'login',
  setFormStatus: () => {},
};

const LoginContext = React.createContext<LoginState>(initialLoginState);

export const LoginContextProvider = (props: object): React.ReactElement => {
  const [formStatus, setFormStatus] = React.useState<FormStatus>('login');

  return (
    <LoginContext.Provider
      value={{
        formStatus,
        setFormStatus,
      }}
      {...props}
    />
  );
};

export const useLoginContext = (): LoginState => React.useContext(LoginContext);
