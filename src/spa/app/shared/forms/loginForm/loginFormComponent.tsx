import * as React from 'react';
import { FormProp } from 'types/formTypes';
import LoginFormButtons from './loginFormButtons/loginFormButtons';
import LoginFormInputs from './loginFormInputs/loginFormInputs';
import LoginFormSocial from './loginFormSocial/loginFormSocial';

interface Props {
  form: FormProp;
  formStatus: any;
  handleLogin: () => void;
  setFormStatus: any;
}

const LoginFormComponent: React.FC<Props> = ({
  form,
  formStatus,
  handleLogin,
  setFormStatus,
}) => (
  <>
      // @ts-ignore
    <button type="button" onClick={() => console.log(form.getFieldsValue())}>foo</button>
    <button type="button" onClick={handleLogin}>login</button>
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
