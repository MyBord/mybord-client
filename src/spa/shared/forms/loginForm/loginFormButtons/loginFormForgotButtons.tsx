import * as React from 'react';
import Button from 'buttons/button/button';
import FormItem from 'forms/formItem/formItem';
import * as styles from './loginFormButtons.module.less';

const LoginFormForgotButtons: React.FC = () => {
  const handleReset = (): void => {
    console.log('resetting password');
  };

  return (
    <div className={[styles.buttonDiv, styles.forgotButtonDiv].join(' ')}>
      <div className={styles.forgotDiv} />
      <FormItem fieldName="reset-password">
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
