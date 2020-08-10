import * as React from 'react';
import Form from 'forms/form/form';
import FormItem from 'forms/formItem/formItem';
import TextInput from 'inputs/textInput/textInput';
import * as styles from './addCardModalForm.module.less';

const AddCardModalForm: React.FC = () => (
  <Form onSubmit={() => console.log('foo')}>
    <FormItem fieldName="add-card-modal-category">
      <TextInput placeholder="foo" />
    </FormItem>
  </Form>
);

export default AddCardModalForm;
