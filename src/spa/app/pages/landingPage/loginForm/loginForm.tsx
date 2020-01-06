import * as React from 'react';
import { Form } from 'antd';
import * as styles from './loginForm.module.less';
import Anchor from 'inputs/anchor/anchor';
import Checkbox from 'inputs/checkbox/checkbox';
import TextInput from 'inputs/textInput/textInput';

const LoginForm: React.FC = () => (
  <div className={styles.div}>
    <Form
      className={styles.form}
      onSubmit={() => console.log('-- form submitted --')}
    >
      <TextInput placeholder="Email" type="email" />
      <TextInput placeholder="Password" type="password" />
      <div>
        <Checkbox label="Remember Me" />
        <Anchor label="Forgot Password?" link="https://www.google.com" />
      </div>
    </Form>
  </div>
);

export default LoginForm;
