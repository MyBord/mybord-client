import * as React from 'react';
import Button from 'buttons/button/button';
import Form from 'forms/form/form';
import FormItem from 'forms/formItem/formItem';
import TextInput from 'inputs/textInput/textInput';
import { FormProp } from 'types/formTypes';
import * as styles from './dashboardHeaderFilterForm.module.less';

interface FormContentProps {
  canMultiEdit: boolean;
  errorMessage: string;
  form?: FormProp;
  isWaiting: boolean;
  toggleMultiEditStatus: () => void;
}

interface Props extends FormContentProps {
  onSubmit: (form: FormProp) => Promise<void>;
}

const FormContent: React.FC<FormContentProps> = ({
  canMultiEdit,
  errorMessage,
  form,
  isWaiting,
  toggleMultiEditStatus,
}) => (
  <div className={styles.div}>
    <FormItem
      errorMessage={errorMessage}
      fieldName="add-youtube-video-input"
      form={form}
      required
      requiredMessage="A url is required"
    >
      <TextInput placeholder="youtube url" />
    </FormItem>
    <FormItem fieldName="add-youtube-video-submit" form={form}>
      <Button
        htmlType="submit"
        isWaiting={isWaiting}
        label="Add Video"
      />
    </FormItem>
    <FormItem fieldName="edit-cards" form={form}>
      <Button
        htmlType="button"
        label={canMultiEdit ? 'Editing' : 'Edit'}
        onClick={toggleMultiEditStatus}
      />
    </FormItem>
  </div>
);

const DashboardHeaderFilterFormComponent: React.FC<Props> = ({
  canMultiEdit,
  errorMessage,
  isWaiting,
  onSubmit,
  toggleMultiEditStatus,
}) => (
  <Form onSubmit={onSubmit}>
    <FormContent
      canMultiEdit={canMultiEdit}
      errorMessage={errorMessage}
      isWaiting={isWaiting}
      toggleMultiEditStatus={toggleMultiEditStatus}
    />
  </Form>
);

export default DashboardHeaderFilterFormComponent;
