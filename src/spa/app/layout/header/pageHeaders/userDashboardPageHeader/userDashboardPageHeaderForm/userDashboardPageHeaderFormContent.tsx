import * as React from 'react';
import Button from 'buttons/button/button';
import IconButton from 'buttons/iconButton/iconButton';
import FormItem from 'forms/formItem/formItem';
import TextInput from 'inputs/textInput/textInput';
import { FormProp } from 'types/formTypes';
import { TOGGLE_SHOW_FILTERS } from 'context/userDashboardContext/userDashboardReducerTypes';
import { useMultiSelectCardContext } from 'context/multiSelectCardContext/multiSelectCardContext';
import { useUserDashboardContext } from 'context/userDashboardContext/userDashboardContext';
import UserDashboardPageHeaderFilters
  from './userDashboardPageHeaderFilters/userDashboardPageHeaderFilters';
import * as styles from './userDashboardPageHeaderForm.module.less';

interface Props {
  errorMessage: string;
  form?: FormProp;
  isWaiting: boolean;
}

const UserDashboardPageHeaderFormContent: React.FC<Props> = ({
  errorMessage,
  form,
  isWaiting,
}) => {
  const { canMultiEdit, toggleMultiEditStatus } = useMultiSelectCardContext();
  const { dispatch } = useUserDashboardContext();

  const handleFilterClick = (): void => {
    dispatch({ type: TOGGLE_SHOW_FILTERS });
  }

  return (
    <div className={styles.formContainer}>
      <div className={styles.mainContainer}>
        <FormItem
          errorMessage={errorMessage}
          fieldName="add-card-url-input"
          form={form}
          required
          requiredMessage="A url is required"
        >
          <TextInput overlayClassName={styles.input} placeholder="url" />
        </FormItem>
        <div className={styles.buttonsContainer}>
          <FormItem fieldName="add-card-url-submit" form={form}>
            <div className={styles.buttonDiv}>
              <Button
                htmlType="submit"
                isWaiting={isWaiting}
                label="Add"
              />
            </div>
          </FormItem>
        </div>
        <IconButton
          color="blue"
          iconName="filter"
          onClick={handleFilterClick}
          size={32}
        />
        {/* <FormItem fieldName="edit-cards" form={form}> */}
        {/*  <Button */}
        {/*    htmlType="button" */}
        {/*    label={canMultiEdit ? 'Editing' : 'Edit'} */}
        {/*    onClick={toggleMultiEditStatus} */}
        {/*  /> */}
        {/* </FormItem> */}
      </div>
      <UserDashboardPageHeaderFilters form={form} />
    </div>
  );
};

export default UserDashboardPageHeaderFormContent;
