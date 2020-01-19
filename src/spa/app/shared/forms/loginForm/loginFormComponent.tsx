import * as React from 'react';
import { FormProp } from 'types/formTypes';
import LoginFormButtons from './loginFormButtons/loginFormButtons';
import LoginFormInputs from './loginFormInputs/loginFormInputs';
import LoginFormSocial from './loginFormSocial/loginFormSocial';

interface Props {
  form: FormProp;
  formStatus: any;
  setFormStatus: any;
}

const LoginFormComponent: React.FC<Props> = ({
  form,
  formStatus,
  setFormStatus,
}) => (
  <>
    <LoginFormInputs form={form} formStatus={formStatus} />
    <LoginFormButtons
      form={form}
      formStatus={formStatus}
      setFormStatus={setFormStatus}
    />
    <LoginFormSocial formStatus={formStatus} />
  </>
);

export default LoginFormComponent;
