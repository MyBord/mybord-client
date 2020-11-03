import * as React from 'react';
import FormItem from 'forms/formItem/formItem';
import TextInput from 'inputs/textInput/textInput';
import { FormProp } from 'types/formTypes';
import * as styles from './loginFormInputs.module.less';

const duplicateUsernameMessage = 'That username is already taken';

const invalidUsernameMessage = 'The username can only letters (a-z), numbers (0-9), dashes,'
  + ' underscores and periods (-_.)';

interface Props {
  form: FormProp;
  signUpStatus: string; // ToDo: change
}

const Bar: React.FC<Props> = ({ form, signUpStatus }) => {
  const getUsernameErrorMessage = (): string => {
    if (signUpStatus === 'invalid username') {
      return invalidUsernameMessage;
    }
    if (signUpStatus === 'duplicate username') {
      return duplicateUsernameMessage;
    }

    return null;
  };

  const usernameClassName = signUpStatus === 'invalid username'
    ? styles.invalidUsernameDiv
    : styles.usernameDiv;

  return (
    <div className={usernameClassName}>
      <FormItem
        errorMessage={getUsernameErrorMessage()}
        fieldName="loginUsername"
        form={form}
        required
        requiredMessage="Please enter a username"
      >
        <TextInput placeholder="Username" />
      </FormItem>
    </div>
  );
};

export default Bar;
