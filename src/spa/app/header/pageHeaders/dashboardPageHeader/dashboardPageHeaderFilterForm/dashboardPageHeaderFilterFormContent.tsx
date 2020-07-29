import * as React from 'react';
import Button from 'buttons/button/button';
import FormItem from 'forms/formItem/formItem';
import IconButton from 'icons/iconButton/iconButton';
import PopOver from 'modals/popOver/popOver';
import TextInput from 'inputs/textInput/textInput';
import { FormProp } from 'types/formTypes';
import DashboardPageHeaderFiltersContent
  from './dashboardPageHeaderFiltersContent/dashboardPageHeaderFiltersContent';
import * as styles from './dashboardPageHeaderFilterForm.module.less';

interface Props {
  errorMessage: string;
  form?: FormProp;
  isWaiting: boolean;
}

const DashboardPageHeaderFilterFormContent: React.FC<Props> = ({
  errorMessage,
  form,
  isWaiting,
}) => (
  <div className={styles.formContainer}>
    <FormItem
      errorMessage={errorMessage}
      fieldName="add-youtube-video-input"
      form={form}
      required
      requiredMessage="A url is required"
    >
      <TextInput overlayClassName={styles.input} placeholder="youtube url" />
    </FormItem>
    <div className={styles.buttonsContainer}>
      <FormItem fieldName="add-youtube-video-submit" form={form}>
        <div className={styles.buttonDiv}>
          <Button
            htmlType="submit"
            isWaiting={isWaiting}
            label="Add Video"
          />
        </div>
      </FormItem>
    </div>
  </div>
);

export default DashboardPageHeaderFilterFormContent;
