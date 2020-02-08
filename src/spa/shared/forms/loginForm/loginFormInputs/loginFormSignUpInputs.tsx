import * as React from 'react';
import FormItem from 'forms/formItem/formItem';
import PasswordInput from 'inputs/passwordInput/passwordInput';
import TextInput from 'inputs/textInput/textInput';
import { FormProp } from 'types/formTypes';

interface Props {
  form: FormProp;
}

const LoginFormSignUpInputs: React.FC<Props> = ({ form }) => (
  <>
    <FormItem
      fieldName="email"
      form={form}
      required
      requiredMessage="Please enter your email address."
      type="email"
      typeMessage="You entered an invalid email address"
    >
      <TextInput placeholder="Email" />
    </FormItem>
    <FormItem
      fieldName="password"
      form={form}
      required
      requiredMessage="Please enter your password."
    >
      <PasswordInput placeholder="Password" />
    </FormItem>
    <FormItem
      fieldName="password-confirm"
      form={form}
    >
      <PasswordInput placeholder="Confirm Password" />
    </FormItem>
  </>
);

export default LoginFormSignUpInputs;
