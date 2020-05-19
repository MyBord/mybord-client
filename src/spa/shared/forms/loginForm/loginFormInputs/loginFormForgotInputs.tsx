import * as React from 'react';
import FormItem from 'forms/formItem/formItem';
import TextInput from 'inputs/textInput/textInput';

const LoginFormForgotInputs: React.FC = () => (
  <FormItem
    fieldName="email"
    required
    requiredMessage="Your email address is required."
  >
    <TextInput placeholder="Please enter your email address" />
  </FormItem>
);

export default LoginFormForgotInputs;
