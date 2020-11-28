import * as React from 'react';
import FormItem from 'formItem/formItem';
import PasswordInput from 'inputs/passwordInput/passwordInput';
import TextInput from 'inputs/textInput/textInput';
import { FormProp } from 'types/formTypes';

interface Props {
  form: FormProp;
}

const LoginFormLoginInputs: React.FC<Props> = ({ form }) => (
  <>
    <FormItem
      fieldName="emailOrUsername"
      form={form}
      required
      requiredMessage="Please enter your email address or username"
    >
      <TextInput placeholder="Email or Username" />
    </FormItem>
    <FormItem
      fieldName="password"
      form={form}
      required
      requiredMessage="Please enter your password"
    >
      <PasswordInput placeholder="Password" />
    </FormItem>
  </>
);

export default LoginFormLoginInputs;
