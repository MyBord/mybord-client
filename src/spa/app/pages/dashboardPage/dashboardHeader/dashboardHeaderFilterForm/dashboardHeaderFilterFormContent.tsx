import * as React from 'react';
import Button from 'buttons/button/button';
import Form from 'forms/form/form';
import FormItem from 'forms/formItem/formItem';
import IconButton from 'icons/iconButton/iconButton';
import PopOver from 'modals/popOver/popOver';
import TextInput from 'inputs/textInput/textInput';
import { FormProp } from 'types/formTypes';
import DashboardFilterContent from './dashboardFilterContent/dashboardFilterContent';
import * as styles from './dashboardHeaderFilterForm.module.less';

interface FormContentProps {
  canMultiEdit: boolean;
  errorMessage: string;
  form?: FormProp;
  iconButtonRef: React.RefObject<HTMLButtonElement>;
  isWaiting: boolean;
  setShowFilters: (showFilters: boolean | ((prevState: boolean) => boolean)) => void;
  showFilters: boolean;
  toggleMultiEditStatus: () => void;
}

interface Props extends FormContentProps {
  onSubmit: (form: FormProp) => Promise<void>;
}

const FormContent: React.FC<FormContentProps> = ({
  canMultiEdit,
  errorMessage,
  form,
  iconButtonRef,
  isWaiting,
  setShowFilters,
  showFilters,
  toggleMultiEditStatus,
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
    <div className={styles.buttonsContainer}>
      <PopOver
        Content={<DashboardFilterContent />}
        caretPosition="top-center"
        node={iconButtonRef}
        onHide={() => setShowFilters(false)}
        position={{ x: -3.75, y: 3 }}
        show={showFilters}
      />
      <FormItem fieldName="filter" form={form}>
        <IconButton
          color="blue"
          iconName="filter"
          onClick={() => setShowFilters((prevState) => !prevState)}
          ref={iconButtonRef}
          size={32}
        />
      </FormItem>
    </div>
    {/* <FormItem fieldName="edit-cards" form={form}> */}
    {/*  <Button */}
    {/*    htmlType="button" */}
    {/*    label={canMultiEdit ? 'Editing' : 'Edit'} */}
    {/*    onClick={toggleMultiEditStatus} */}
    {/*  /> */}
    {/* </FormItem> */}
  </div>
);

const DashboardHeaderFilterFormContent: React.FC<Props> = ({
  canMultiEdit,
  errorMessage,
  iconButtonRef,
  isWaiting,
  onSubmit,
  setShowFilters,
  showFilters,
  toggleMultiEditStatus,
}) => (
  <Form onSubmit={onSubmit}>
    <FormContent
      canMultiEdit={canMultiEdit}
      errorMessage={errorMessage}
      iconButtonRef={iconButtonRef}
      isWaiting={isWaiting}
      setShowFilters={setShowFilters}
      showFilters={showFilters}
      toggleMultiEditStatus={toggleMultiEditStatus}
    />
  </Form>
);

export default DashboardHeaderFilterFormContent;
