import * as React from 'react';
import FormItem from 'forms/formItem/formItem';
import PasswordInput from 'inputs/passwordInput/passwordInput';
import TextInput from 'inputs/textInput/textInput';
import { FormProp, LoginFormStatus } from 'types/formTypes';

interface Props {
  form: FormProp;
  formStatus: LoginFormStatus;
}

const LoginFormInputs: React.FC<Props> = ({ form, formStatus }) => (
  <>
    <FormItem
      fieldName="email"
      form={form}
      required
      requiredMessage="Please enter your email address."
      type={formStatus === 'signUp' && 'email'}
      typeMessage={formStatus === 'signUp' && 'You entered an invalid email address'}
    >
      <TextInput placeholder="Email" />
    </FormItem>
    {
      formStatus !== 'forgot' && (
        <FormItem
          fieldName="password"
          form={form}
          required
          requiredMessage="Please enter your password."
        >
          <PasswordInput placeholder="Password" />
        </FormItem>
      )
    }
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
