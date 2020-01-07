import * as React from 'react';
import { Form } from 'antd';
import Anchor from 'inputs/anchor/anchor';
import Button from 'buttons/button/button';
import Checkbox from 'inputs/checkbox/checkbox';
import TextInput from 'inputs/textInput/textInput';
import * as styles from './loginForm.module.less';

const LoginForm: React.FC = () => (
  <div className={styles.formContainer}>
    <Form
      className={styles.form}
      onSubmit={() => console.log('-- form submitted --')}
    >
      <TextInput placeholder="Email" type="email" />
      <TextInput placeholder="Password" type="password" />
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
    </Form>
  </div>
);

export default LoginForm;
