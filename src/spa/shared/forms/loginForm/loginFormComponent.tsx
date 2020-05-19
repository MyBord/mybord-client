import * as React from 'react';
import Alert from 'shared/alert/alert';
import FormItem from 'forms/formItem/formItem';
import Typography from 'typography/typography';
import { LoginFormStatus } from 'types/formTypes';
import LoginFormButtons from './loginFormButtons/loginFormButtons';
import LoginFormInputs from './loginFormInputs/loginFormInputs';
import LoginFormSocial from './loginFormSocial/loginFormSocial';

interface Props {
  formStatus: LoginFormStatus;
  hasIncorrectCreds: boolean;
  isAuthenticationWaiting: boolean;
  isPasswordWeak: boolean;
  setFormStatus: (status: LoginFormStatus) => void;
}

const LoginFormComponent: React.FC<Props> = ({
  formStatus,
  hasIncorrectCreds,
  isAuthenticationWaiting,
  isPasswordWeak,
  setFormStatus,
}) => (
  <>
    <FormItem fieldName="alert">
      <Alert
        message="email or password is incorrect"
        showAlert={hasIncorrectCreds}
      />
    </FormItem>
    <LoginFormInputs formStatus={formStatus} isPasswordWeak={isPasswordWeak} />
    <LoginFormButtons
      formStatus={formStatus}
      isAuthenticationWaiting={isAuthenticationWaiting}
      setFormStatus={setFormStatus}
    />
    {/* <LoginFormSocial formStatus={formStatus} /> */}
    <Typography text="About MyBord" link="/about" />
  </>
);

export default LoginFormComponent;
