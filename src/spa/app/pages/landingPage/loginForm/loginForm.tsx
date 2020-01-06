import * as React from 'react';
import { Form } from 'antd';
import * as styles from './loginForm.module.less';
import TextInput from 'inputs/textInput/textInput';
import Checkbox from 'inputs/checkbox/checkbox';

const LoginForm: React.FC = () => (
  <div className={styles.div}>
    <Form
      className={styles.form}
      onSubmit={() => console.log('-- form submitted --')}
    >
      <TextInput placeholder="Email" type="email" />
      <TextInput placeholder="Password" type="password" />
      <Checkbox label="Remember Me" />
    </Form>
  </div>
);

export default LoginForm;
