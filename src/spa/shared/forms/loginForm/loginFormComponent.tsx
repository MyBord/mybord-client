import * as React from 'react';
import Alert from 'shared/alert/alert';
import FormItem from 'forms/formItem/formItem';
import Typography from 'typography/typography';
import { FormProp } from 'types/formTypes';
import LoginFormButtons from './loginFormButtons/loginFormButtons';
import LoginFormInputs from './loginFormInputs/loginFormInputs';
import LoginFormSocial from './loginFormSocial/loginFormSocial';

interface Props {
  form?: FormProp;
  isAuthenticationWaiting: boolean;
}

const LoginFormComponent: React.FC<Props> = ({
  form,
  isAuthenticationWaiting,
}) => (
  <>
    <FormItem fieldName="alert" form={form}>
      <Alert message="email or password is incorrect" />
    </FormItem>
    <LoginFormInputs form={form} />
    <LoginFormButtons
      form={form}
      isAuthenticationWaiting={isAuthenticationWaiting}
    />
    {/* <LoginFormSocial formStatus={formStatus} /> */}
    <Typography text="About MyBord" link="/about" />
  </>
);

export default LoginFormComponent;
