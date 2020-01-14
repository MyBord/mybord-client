import * as React from 'react';
import { Form } from 'antd';
import Anchor from 'inputs/anchor/anchor';
import Button from 'buttons/button/button';
import Checkbox from 'inputs/checkbox/checkbox';
import { LoginFormStatus } from 'types/formTypes';
import * as styles from './loginFormButtons.module.less';

interface Props {
  formStatus: LoginFormStatus;
  setFormStatus: (status: LoginFormStatus) => void;
}

const LoginFormButtons: React.FC<Props> = ({ formStatus, setFormStatus }) => {
  const handleLogin = (): void => {
    setFormStatus('login');
  };
  const handleSignUp = (): void => {
    setFormStatus('signUp');
  };

  return (
    <>
      <div className={styles.rememberForgotDiv}>
        <Checkbox label="Remember Me" />
        {
          formStatus === 'login' && (
            <Form.Item>
              <Anchor label="Forgot Password?" link="https://www.google.com" />
            </Form.Item>
          )
        }
      </div>
      <div className={[
        styles.buttonDiv,
        formStatus === 'login' ? styles.loginDiv : styles.signUpDiv,
      ].join(' ')}
      >
        {
          formStatus === 'login' && (
            <Form.Item>
              <Button label="Login" onClick={handleLogin} />
            </Form.Item>
          )
        }
        <Form.Item>
          <Button
            label="Sign Up"
            onClick={handleSignUp}
            type={formStatus === 'login' ? 'secondary' : 'primary'}
          />
        </Form.Item>
        {
          formStatus === 'signUp' && (
            <Form.Item>
              <Anchor label="back" onClick={() => setFormStatus('login')} />
            </Form.Item>
          )
        }
      </div>
    </>
  );
};

export default LoginFormButtons;
