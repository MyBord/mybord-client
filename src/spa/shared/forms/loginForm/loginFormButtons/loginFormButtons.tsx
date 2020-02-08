import * as React from 'react';
import Anchor from 'inputs/anchor/anchor';
import Button from 'buttons/button/button';
import Checkbox from 'inputs/checkbox/checkbox';
import FormItem from 'forms/formItem/formItem';
import { FormProp, LoginFormStatus } from 'types/formTypes';
import * as styles from './loginFormButtons.module.less';

interface Props {
  form: FormProp;
  formStatus: LoginFormStatus;
  setFormStatus: (status: LoginFormStatus) => void;
}

const LoginFormButtons: React.FC<Props> = ({ form, formStatus, setFormStatus }) => {
  const handleForgot = (): void => {
    setFormStatus('forgot');
  };
  const handleLogin = (): void => {
    setFormStatus('login');
  };
  const handleSignUp = (): void => {
    setFormStatus('signUp');
  };

  return (
    <>
      {
        formStatus !== 'forgot' && (
          <div className={styles.rememberForgotDiv}>
            <FormItem
              fieldName="remember-me"
              form={form}
            >
              <Checkbox label="Remember Me" />
            </FormItem>
            {
              formStatus === 'login' && (
                <FormItem
                  fieldName="forgot-password"
                  form={form}
                >
                  <Anchor label="Forgot Password?" onClick={handleForgot} />
                </FormItem>
              )
            }
          </div>
        )
      }
      <div className={[
        styles.buttonDiv,
        formStatus === 'login' ? styles.loginDiv : styles.signUpDiv,
      ].join(' ')}
      >
        {
          formStatus !== 'signUp' && (
            <FormItem
              fieldName={formStatus === 'login' ? 'login' : 'reset-password'}
              form={form}
            >
              <Button
                htmlType="submit"
                label={formStatus === 'login' ? 'Login' : 'Reset Password'}
                onClick={handleLogin}
              />
            </FormItem>
          )
        }
        {
          formStatus !== 'forgot' && (
            <FormItem
              fieldName="sign-up"
              form={form}
            >
              <Button
                htmlType={formStatus === 'signUp' ? 'submit' : 'button'}
                label="Sign Up"
                onClick={handleSignUp}
                type={formStatus === 'login' ? 'secondary' : 'primary'}
              />
            </FormItem>
          )
        }
        {
          formStatus === 'signUp' && (
            <FormItem
              fieldName="back"
              form={form}
            >
              <Anchor label="back" onClick={() => setFormStatus('login')} />
            </FormItem>
          )
        }
      </div>
    </>
  );
};

export default LoginFormButtons;
