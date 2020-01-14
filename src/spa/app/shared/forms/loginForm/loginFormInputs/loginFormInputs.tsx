import * as React from 'react';
import PasswordInput from 'inputs/passwordInput/passwordInput';
import TextInput from 'inputs/textInput/textInput';
import { LoginFormStatus } from 'types/formTypes';

interface Props {
  formStatus: LoginFormStatus;
}

const LoginFormInputs: React.FC<Props> = ({ formStatus }) => (
  <>
    {
      formStatus === 'signUp' && <TextInput placeholder="Name" />
    }
    <TextInput placeholder="Email" type="email" />
    <PasswordInput placeholder="Password" />
    {
      formStatus === 'signUp' && <PasswordInput placeholder="Confirm Password" />
    }
  </>
);

export default LoginFormInputs;
