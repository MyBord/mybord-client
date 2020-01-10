import * as React from 'react';
import { Form } from 'antd';
import Anchor from 'inputs/anchor/anchor';
import Button from 'buttons/button/button';
import Checkbox from 'inputs/checkbox/checkbox';
import logo from 'assets/logo.png';
import PasswordInput from 'inputs/passwordInput/passwordInput';
import TextInput from 'inputs/textInput/textInput';
import Typography from 'typography/typography';
import * as styles from './loginForm.module.less';
import './loginForm.less';

const LoginForm: React.FC = () => (
  <div className={styles.formContainer}>
    <div className={styles.logoDiv}>
      <img alt="MyBord logo" className={styles.img} src={logo} />
      <Typography size="xl" text="MyBord.io" weight="bold" />
    </div>
    <Form
      className={styles.form}
      onSubmit={() => console.log('-- form submitted --')}
    >
      <TextInput placeholder="Email" type="email" />
      <PasswordInput placeholder="Password" />
      <div className={styles.loginDiv}>
        <Checkbox label="Remember Me" />
        <Form.Item>
          <Anchor label="Forgot Password?" link="https://www.google.com" />
        </Form.Item>
      </div>
      <div className={styles.buttonDiv}>
        <Form.Item>
          <Button label="Login" onClick={() => {}} />
        </Form.Item>
        <Form.Item>
          <Button label="Sign Up" onClick={() => {}} type="secondary" />
        </Form.Item>
      </div>
      <div className={styles.socialLoginDiv}>
        <Typography text="or login with" />
        <Anchor label="Google" onClick={() => {}} />
        <Anchor label="Facebook" onClick={() => {}} />
      </div>
    </Form>
  </div>
);

export default LoginForm;
