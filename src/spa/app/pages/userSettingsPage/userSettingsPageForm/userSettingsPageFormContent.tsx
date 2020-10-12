import * as React from 'react';
import FormItem from 'forms/formItem/formItem';
import TextInput from 'inputs/textInput/textInput';
import { FormProp } from 'types/formTypes';
import * as styles from './userSettingsPageForm.module.less';

interface Props {
  form?: FormProp;
}

const UserSettingsPageFormContent: React.FC<Props> = ({ form }) => (
  <FormItem
    label="Delete:"
    fieldName="add-card-url-input"
    form={form}
    layout="horizontal"
    required
    requiredMessage="A url is required"
  >
    <TextInput overlayClassName={styles.input} placeholder="url" />
  </FormItem>
);

export default UserSettingsPageFormContent;
