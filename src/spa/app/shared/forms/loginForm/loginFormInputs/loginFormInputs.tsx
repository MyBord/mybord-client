import * as React from 'react';
import { Form } from 'antd';
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
        <Form.Item>
          {
            form.getFieldDecorator('name')(
              <TextInput placeholder="Name" />,
            )
          }
        </Form.Item>
      )
    }
    <Form.Item>
      {
        form.getFieldDecorator('email')(
          <TextInput placeholder="Email" type="email" />,
        )
      }
    </Form.Item>
    <Form.Item>
      {
        form.getFieldDecorator('password')(
          <PasswordInput placeholder="Password" />,
        )
      }
    </Form.Item>
    {
      formStatus === 'signUp' && (
        <Form.Item>
          {
            form.getFieldDecorator('password-confirm')(
              <PasswordInput placeholder="Confirm Password" />,
            )
          }
        </Form.Item>
      )
    }
  </>
);

export default LoginFormInputs;
