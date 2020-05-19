import * as React from 'react';
import FormItem from 'forms/formItem/formItem';
import PasswordInput from 'inputs/passwordInput/passwordInput';
import TextInput from 'inputs/textInput/textInput';

const LoginFormLoginInputs: React.FC = () => (
  <>
    <FormItem
      fieldName="email"
      required
      requiredMessage="Please enter your email address"
    >
      <TextInput placeholder="Email" />
    </FormItem>
    <FormItem
      fieldName="password"
      required
      requiredMessage="Please enter your password"
    >
      <PasswordInput placeholder="Password" />
    </FormItem>
  </>
);

export default LoginFormLoginInputs;
