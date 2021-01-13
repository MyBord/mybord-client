import * as React from 'react';
import Button from 'buttons/button/button';
import FormItem from 'formItem/formItem';
import PasswordInput from 'inputs/passwordInput/passwordInput';
import TextInput from 'inputs/textInput/textInput';
import Toast from 'molecules/toast/toast';
import Typography from 'typography/typography';
// import UserAgreementModal from 'modals/userAgreementModal/userAgreementModal';
import { FormProp, Validator } from 'types/formTypes';
import { SignupStatus } from 'forms/signupForm/signupFormContainer';
import * as styles from './signupForm.module.less';

const duplicateEmailMessage = 'That account already exists';

const duplicateUsernameMessage = 'That username is already taken';

const invalidUsernameMessage = 'The username can only contain letters (a-z), numbers (0-9), dashes,'
  + ' underscores and periods (-_.)';

const PasswordReactMessage = (
  <>
    {/* <Typography color="red" text="Your password must be:" /> */}
    <div className={styles.weakPasswordDiv}>
      {/* <Typography color="red" text="• At least 8 characters long" /> */}
      {/* <Typography color="red" text="• Have at least one upper case character" /> */}
      {/* <Typography color="red" text="• Contain at least one number" /> */}
      {/* <Typography color="red" text="• Contain at least one special character (!@#$&*-)" /> */}
    </div>
  </>
);

interface Props {
  form?: FormProp;
  handleAcceptTerms: () => void;
  handleBack: () => void;
  isAuthenticationWaiting: boolean;
  signupStatus: SignupStatus;
}

const SignupFormContent: React.FC<Props> = ({
  form,
  handleAcceptTerms,
  handleBack,
  isAuthenticationWaiting,
  signupStatus,
}) => {
  const { confirmPassword, loginPassword } = form.getFieldsValue(['confirmPassword', 'loginPassword']);
  const confirmPasswordIsSuccess = confirmPassword
    && confirmPassword.length > 0
    && confirmPassword === loginPassword;

  const validateConfirmPassword: Validator = (rule, value, callback) => {
    if (confirmPasswordIsSuccess) {
      return callback();
    }

    return callback('Passwords must match');
  };

  const getUsernameErrorMessage = (): string => {
    if (signupStatus === 'invalid username') {
      return invalidUsernameMessage;
    }
    if (signupStatus === 'duplicate username') {
      return duplicateUsernameMessage;
    }

    return null;
  };

  const usernameClassName = signupStatus === 'invalid username'
    ? styles.invalidUsernameDiv
    : styles.usernameDiv;

  const loginPasswordClassName = signupStatus === 'weak password'
    ? styles.weakLoginPasswordDiv
    : styles.loginPasswordDiv;

  return (
    <>
      <Toast
        id="user-agreement-toast"
        text="By not accepting the user agreement, you are unable to signup for MyBord."
        type="warning"
      />
      {/*<UserAgreementModal handleAcceptTerms={handleAcceptTerms} form={form} />*/}
      <FormItem
        errorMessage={signupStatus === 'duplicate email' && duplicateEmailMessage}
        fieldName="loginEmail"
        form={form}
        required
        requiredMessage="Please enter your email address"
        type="email"
        typeMessage="You entered an invalid email address"
      >
        {/*<TextInput placeholder="Email" />*/}
      </FormItem>
      <div className={usernameClassName}>
        <FormItem
          errorMessage={getUsernameErrorMessage()}
          fieldName="loginUsername"
          form={form}
          required
          requiredMessage="Please enter a username"
        >
          {/*<TextInput placeholder="Username" />*/}
        </FormItem>
      </div>
      <div className={loginPasswordClassName}>
        <FormItem
          errorMessage={signupStatus === 'weak password' && PasswordReactMessage}
          fieldName="loginPassword"
          form={form}
          required
          requiredMessage="Please enter a password"
        >
          <PasswordInput placeholder="Password" />
        </FormItem>
      </div>
      <FormItem
        fieldName="confirmPassword"
        form={form}
        isSuccess={confirmPasswordIsSuccess}
        required
        requiredMessage="Please confirm your password"
        validator={validateConfirmPassword}
      >
        <PasswordInput placeholder="Confirm Password" />
      </FormItem>
      <div className={styles.buttonDiv}>
        <FormItem fieldName="sign-up" form={form}>
          {/*<Button*/}
          {/*  htmlType="submit"*/}
          {/*  isWaiting={isAuthenticationWaiting}*/}
          {/*  label="Sign Up"*/}
          {/*  type="primary"*/}
          {/*/>*/}
        </FormItem>
        <FormItem fieldName="back" form={form}>
          {/*<Button label="back" onClick={handleBack} type="tertiary" />*/}
        </FormItem>
      </div>
    </>
  );
};

export default SignupFormContent;
