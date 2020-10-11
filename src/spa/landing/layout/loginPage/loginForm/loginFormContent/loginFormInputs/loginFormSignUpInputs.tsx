import * as React from 'react';
import FormItem from 'forms/formItem/formItem';
import PasswordInput from 'inputs/passwordInput/passwordInput';
import TextInput from 'inputs/textInput/textInput';
import Typography from 'typography/typography';
import { FormProp } from 'types/formTypes';
import { useLoginContext } from 'context/loginContext/loginContext';
import * as styles from './loginFormInputs.module.less';

const duplicateEmailMessage = 'That account already exists';

const duplicateUsernameMessage = 'That username is already taken';

const invalidUsernameMessage = 'The username can only letters (a-z), numbers (0-9), dashes,'
  + ' underscores and periods (-_.)';

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

interface Props {
  form: FormProp;
}

const LoginFormSignUpInputs: React.FC<Props> = ({ form }) => {
  const { signUpStatus } = useLoginContext();

  const { confirmPassword, loginPassword } = form.getFieldsValue(['confirmPassword', 'loginPassword']);
  const confirmPasswordIsSuccess = confirmPassword
    && confirmPassword.length > 0
    && confirmPassword === loginPassword;

  const getUsernameErrorMessage = (): string => {
    if (signUpStatus === 'invalid username') {
      return invalidUsernameMessage;
    }
    if (signUpStatus === 'duplicate username') {
      return duplicateUsernameMessage;
    }

    return null;
  };

  return (
    <>
      <FormItem
        errorMessage={signUpStatus === 'duplicate email' && duplicateEmailMessage}
        fieldName="loginEmail"
        form={form}
        required
        requiredMessage="Please enter your email address"
        type="email"
        typeMessage="You entered an invalid email address"
      >
        <TextInput placeholder="Email" />
      </FormItem>
      <FormItem
        errorMessage={getUsernameErrorMessage()}
        fieldName="loginUsername"
        form={form}
        required
        requiredMessage="Please enter a username"
      >
        <TextInput placeholder="Username" />
      </FormItem>
      <FormItem
        errorMessage={signUpStatus === 'weak password' && PasswordReactMessage}
        fieldName="loginPassword"
        form={form}
        required
        requiredMessage="Please enter a password"
      >
        <PasswordInput placeholder="Password" />
      </FormItem>
      <FormItem
        fieldName="confirmPassword"
        form={form}
        isSuccess={confirmPasswordIsSuccess}
      >
        <PasswordInput placeholder="Confirm Password" />
      </FormItem>
    </>
  );
};

export default LoginFormSignUpInputs;
