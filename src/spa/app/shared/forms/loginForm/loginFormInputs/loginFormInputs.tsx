import * as React from 'react';
import FormItem from 'forms/formItem';
import PasswordInput from 'inputs/passwordInput/passwordInput';
import TextInput from 'inputs/textInput/textInput';
import { FormProp, LoginFormStatus } from 'types/formTypes';

interface Props {
  form: FormProp;
  formStatus: LoginFormStatus;
}

const LoginFormInputs: React.FC<Props> = ({ form, formStatus }) => (
  <>
    {
      formStatus === 'signUp' && (
        <FormItem
          fieldName="name"
          form={form}
        >
          <TextInput placeholder="Name" />
        </FormItem>
      )
    }
    <FormItem
      fieldName="email"
      form={form}
    >
      <TextInput placeholder="Email" type="email" />
    </FormItem>
    <FormItem
      fieldName="password"
      form={form}
    >
      <PasswordInput placeholder="Password" />
    </FormItem>
    {
      formStatus === 'signUp' && (
        <FormItem
          fieldName="password-confirm"
          form={form}
        >
          <PasswordInput placeholder="Confirm Password" />
        </FormItem>
      )
    }
  </>
);

export default LoginFormInputs;
