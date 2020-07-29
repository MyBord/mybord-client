import * as React from 'react';
import Button from 'buttons/button/button';
import FormItem from 'forms/formItem/formItem';
import TextInput from 'inputs/textInput/textInput';
import { FormProp } from 'types/formTypes';
import * as styles from './dashboardPageHeaderFilterForm.module.less';

interface Props {
  form?: FormProp;
}

const DashboardPageHeaderFilterFormContent: React.FC<Props> = ({ form }) => (
  <div className={styles.formContainer}>
    <TextInput overlayClassName={styles.input} placeholder="youtube url" />
    <div className={styles.buttonsContainer}>
      <div className={styles.buttonDiv}>
        <Button htmlType="submit" label="Add Video" />
      </div>
    </div>
  </div>
);

export default DashboardPageHeaderFilterFormContent;
