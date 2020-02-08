import * as React from 'react';
import Button from 'buttons/button/button';
import FormItem from 'forms/formItem/formItem';
import { FormProp } from 'types/formTypes';
import * as styles from './loginFormButtons.module.less';

interface Props {
  form: FormProp;
}

const LoginFormForgotButtons: React.FC<Props> = ({ form }) => {
  const handleReset = (): void => {
    console.log('resetting password');
  };

  return (
    <div className={styles.buttonDiv}>
      <FormItem
        fieldName="reset-password"
        form={form}
      >
        <Button
          htmlType="submit"
          label="Reset Password"
          onClick={handleReset}
        />
      </FormItem>
    </div>
  );
};

export default LoginFormForgotButtons;
