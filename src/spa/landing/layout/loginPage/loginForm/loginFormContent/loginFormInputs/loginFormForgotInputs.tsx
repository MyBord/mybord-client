import * as React from 'react';
import FormItem from 'forms/formItem/formItem';
import TextInput from 'inputs/textInput/textInput';
import { FormProp } from 'types/formTypes';

interface Props {
  form: FormProp;
}

const LoginFormForgotInputs: React.FC<Props> = ({ form }) => (
  <FormItem
    fieldName="emailOrUsername"
    form={form}
    required
    requiredMessage="Your email address or username is required."
  >
    <TextInput placeholder="Please enter your email address or username" />
  </FormItem>
);

export default LoginFormForgotInputs;
