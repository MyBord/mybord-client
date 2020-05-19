import * as React from 'react';
import FormItem from 'forms/formItem/formItem';
import PasswordInput from 'inputs/passwordInput/passwordInput';
import TextInput from 'inputs/textInput/textInput';
import Typography from 'typography/typography';
import * as styles from './loginFormInputs.module.less';

interface Props {
  isPasswordWeak: boolean;
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

const LoginFormSignUpInputs: React.FC<Props> = ({ isPasswordWeak }) => (
  <>
    <FormItem
      fieldName="email"
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
      required
      requiredMessage="Please enter a password"
    >
      <PasswordInput placeholder="Password" />
    </FormItem>
    {/* <FormItem */}
    {/*  fieldName="password-confirm" */}
    {/* > */}
    {/*  <PasswordInput placeholder="Confirm Password" /> */}
    {/* </FormItem> */}
  </>
);

export default LoginFormSignUpInputs;
