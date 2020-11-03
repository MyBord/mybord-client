import * as React from 'react';
import FormItem from 'forms/formItem/formItem';
import TextInput from 'inputs/textInput/textInput';
import { FormProp } from 'types/formTypes';

const duplicateEmailMessage = 'That account already exists';

interface Props {
  form: FormProp;
  isDuplicateEmail: boolean;
}

const Foo: React.FC<Props> = ({ form, isDuplicateEmail }) => (
  <FormItem
    errorMessage={isDuplicateEmail && duplicateEmailMessage}
    fieldName="loginEmail"
    form={form}
    required
    requiredMessage="Please enter your email address"
    type="email"
    typeMessage="You entered an invalid email address"
  >
    <TextInput placeholder="Email" />
  </FormItem>
);

export default Foo;
