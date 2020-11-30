import * as React from 'react';
import Alert from 'alert/alert';
import Button from 'buttons/button/button';
import FormItem from 'formItem/formItem';
import PasswordInput from 'inputs/passwordInput/passwordInput';
import TextInput from 'inputs/textInput/textInput';
import { FormProp } from 'types/formTypes';
import * as styles from './loginForm.module.less';

interface Props {
  alertMessage: string;
  form: FormProp;
  isAuthenticationWaiting: boolean;
}

const LoginFormContent: React.FC<Props> = ({
  alertMessage,
  form,
  isAuthenticationWaiting,
}) => (
  <>
    <FormItem fieldName="alert" form={form}>
      <Alert message={alertMessage} showAlert={!!alertMessage} />
    </FormItem>
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
    <div className={styles.buttonDiv}>
      <FormItem fieldName="login" form={form}>
        <Button htmlType="submit" isWaiting={isAuthenticationWaiting} label="Login" />
      </FormItem>
      <FormItem fieldName="sign-up" form={form}>
        <Button htmlType="button" label="Sign Up" type="secondary"/>
      </FormItem>
    </div>
  </>
);

export default LoginFormContent;
