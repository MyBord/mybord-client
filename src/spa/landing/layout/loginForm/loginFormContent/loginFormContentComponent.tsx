import * as React from 'react';
import Typography from 'typography/typography';
import { FormProp } from 'types/formTypes';
import LoginFormAlert from './loginFormAlert/loginFormAlert';
import LoginFormButtons from './loginFormButtons/loginFormButtons';
import LoginFormInputs from './loginFormInputs/loginFormInputs';
import LoginFormSocial from './loginFormSocial/loginFormSocial';

interface Props {
  form?: FormProp;
}

const LoginFormContentComponent: React.FC<Props> = ({
  form,
}) => (
  <>
    <LoginFormAlert form={form} />
    <LoginFormInputs form={form} />
    <LoginFormButtons form={form} />
    {/* <LoginFormSocial /> */}
    <Typography text="About MyBord" link="/about" />
  </>
);

export default LoginFormContentComponent;
