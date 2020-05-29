import * as React from 'react';
import Button from 'buttons/button/button';
import Form from 'forms/form/form';
import FormItem from 'forms/formItem/formItem';
import TextInput from 'inputs/textInput/textInput';
import { FormProp } from 'types/formTypes';
import * as styles from './dashboardHeaderFilterForm.module.less';

interface FormContentProps {
  errorMessage: string;
  form?: FormProp;
  isWaiting: boolean;
  toggleEditStatus: () => void;
}

interface Props extends FormContentProps {
  onSubmit: (form: FormProp) => Promise<void>;
}

const FormContent: React.FC<FormContentProps> = ({
  errorMessage,
  form,
  isWaiting,
  toggleEditStatus,
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
        label="Edit"
        onClick={toggleEditStatus}
      />
    </FormItem>
  </div>
);

const DashboardHeaderFilterFormComponent: React.FC<Props> = ({
  errorMessage,
  isWaiting,
  onSubmit,
  toggleEditStatus,
}) => (
  <Form onSubmit={onSubmit}>
    <FormContent
      errorMessage={errorMessage}
      isWaiting={isWaiting}
      toggleEditStatus={toggleEditStatus}
    />
  </Form>
);

export default DashboardHeaderFilterFormComponent;
