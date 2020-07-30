import * as React from 'react';
import FormItem from 'forms/formItem/formItem';
import PasswordInput from 'inputs/passwordInput/passwordInput';
import TextInput from 'inputs/textInput/textInput';
import Typography from 'typography/typography';
import { FormProp } from 'types/formTypes';
import { useLoginContext } from 'context/loginContext/loginContext';
import * as styles from './loginFormInputs.module.less';

interface Props {
  form: FormProp;
}

const PasswordReactMessage = (
  <>
    <Typography
      color="red"
      text="Your password must be:"
    />
    <div className={styles.weakPasswordDiv}>
      <Typography
        color="red"
        text="• At least 8 characters long"
      />
      <Typography
        color="red"
        text="• Have at least one upper case character"
      />
      <Typography
        color="red"
        text="• Contain at least one number"
      />
      <Typography
        color="red"
        text="• Contain at least one special character (!@#$&*-)"
      />
    </div>
  </>
);

const LoginFormSignUpInputs: React.FC<Props> = ({ form }) => {
  const { isPasswordWeak } = useLoginContext();

  return (
    <>
      <FormItem
        fieldName="email"
        form={form}
        required
        requiredMessage="Please enter your email address"
        type="email"
        typeMessage="You entered an invalid email address"
      >
        <TextInput placeholder="Email" />
      </FormItem>
      <FormItem
        errorMessage={isPasswordWeak && PasswordReactMessage}
        fieldName="password"
        form={form}
        required
        requiredMessage="Please enter a password"
      >
        <PasswordInput placeholder="Password" />
      </FormItem>
      {/* <FormItem */}
      {/*  fieldName="password-confirm" */}
      {/*  form={form} */}
      {/* > */}
      {/*  <PasswordInput placeholder="Confirm Password" /> */}
      {/* </FormItem> */}
    </>
  );
};

export default LoginFormSignUpInputs;
