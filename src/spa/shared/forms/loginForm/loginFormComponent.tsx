import * as React from 'react';
import Alert from 'shared/alert/alert';
import FormItem from 'forms/formItem/formItem';
import Typography from 'typography/typography';
import { FormProp, LoginFormStatus } from 'types/formTypes';
import LoginFormButtons from './loginFormButtons/loginFormButtons';
import LoginFormInputs from './loginFormInputs/loginFormInputs';
import LoginFormSocial from './loginFormSocial/loginFormSocial';

interface Props {
  form?: FormProp;
  formStatus: LoginFormStatus;
  hasIncorrectCreds: boolean;
  isAuthenticationWaiting: boolean;
  isPasswordWeak: boolean;
}

const LoginFormComponent: React.FC<Props> = ({
  form,
  formStatus,
  hasIncorrectCreds,
  isAuthenticationWaiting,
  isPasswordWeak,
}) => (
  <>
    <FormItem fieldName="alert" form={form}>
      <Alert
        message="email or password is incorrect"
        showAlert={hasIncorrectCreds}
      />
    </FormItem>
    <LoginFormInputs
      form={form}
      formStatus={formStatus}
      isPasswordWeak={isPasswordWeak}
    />
    <LoginFormButtons
      form={form}
      formStatus={formStatus}
      isAuthenticationWaiting={isAuthenticationWaiting}
    />
    {/* <LoginFormSocial formStatus={formStatus} /> */}
    <Typography text="About MyBord" link="/about" />
  </>
);

export default LoginFormComponent;
