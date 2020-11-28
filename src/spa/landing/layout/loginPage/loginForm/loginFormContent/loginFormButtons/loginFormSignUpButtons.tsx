import * as React from 'react';
import Button from 'buttons/button/button';
import Checkbox from 'inputs/checkbox/checkbox';
import FormItem from 'formItem/formItem';
import { FormProp } from 'types/formTypes';
import { useLoginContext } from 'context/loginContext/loginContext';
import * as styles from './loginFormButtons.module.less';

interface Props {
  form: FormProp;
}

const LoginFormSignUpButtons: React.FC<Props> = ({ form }) => {
  const { isAuthenticationWaiting, setFormStatus, setSignUpStatus } = useLoginContext();

  const handleBack = (): void => {
    setFormStatus('login');
    setSignUpStatus(null);
  };

  return (
    <>
      {/* <div className={styles.rememberForgotDiv}> */}
      {/*  <FormItem */}
      {/*    fieldName="remember-me" */}
      {/*    form={form} */}
      {/*  > */}
      {/*    <Checkbox label="Remember Me" /> */}
      {/*  </FormItem> */}
      {/* </div> */}
      <div className={[styles.buttonDiv, styles.signUpDiv].join(' ')}>
        <FormItem
          fieldName="sign-up"
          form={form}
        >
          <Button
            htmlType="submit"
            isWaiting={isAuthenticationWaiting}
            label="Sign Up"
            type="primary"
          />
        </FormItem>
        <FormItem
          fieldName="back"
          form={form}
        >
          <Button label="back" onClick={handleBack} type="tertiary" />
        </FormItem>
      </div>
    </>
  );
};

export default LoginFormSignUpButtons;
