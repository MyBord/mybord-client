import * as React from 'react';
import Button from 'buttons/button/button';
import Dropdown from 'inputs/dropdown/dropdown';
import FavoriteButton from 'buttons/favoriteButton/favoriteButton';
import FormItem from 'forms/formItem/formItem';
import TextInput from 'inputs/textInput/textInput';
import Toggle from 'inputs/toggle/toggle';
import usePrevious from 'hooks/usePrevious';
import { AddCardModalProps } from 'types/modalTypes';
import { FormProp } from 'types/formTypes';
import { useAddCardModalContext } from 'context/addCardModalContext/addCardModalContext';
import * as styles from './addCardModalForm.module.less';

interface Props extends AddCardModalProps {
  form?: FormProp;
  handleCancel: () => void;
  isWaiting: boolean;
}

const dropdownOptions = [
  { label: 'Video', value: 'Video' },
];

const AddCardModalFormComponent: React.FC<Props> = ({
  form,
  formData,
  handleCancel,
  isWaiting,
}) => {
  const title = form.getFieldValue('add-card-modal-title');
  const prevTitle = usePrevious(title);
  const { setTitle } = useAddCardModalContext();

  React.useEffect(() => {
    if (prevTitle !== title) {
      setTitle(title);
    }
  }, [prevTitle, title]);

  return (
    <>
      <FormItem
        fieldName="add-card-modal-category"
        form={form}
        initialValue={formData.category}
        label="Category"
      >
        <Dropdown options={dropdownOptions} />
      </FormItem>
      <FormItem
        fieldName="add-card-modal-title"
        form={form}
        initialValue={formData.title}
        label="Title"
      >
        <TextInput />
      </FormItem>
      <div className={styles.rowDiv}>
        <div className={styles.toDoDiv}>
          <FormItem
            fieldName="add-card-modal-to-do"
            form={form}
            initialValue={false}
            label="To Do"
          >
            <Toggle />
          </FormItem>
        </div>
        <div className={styles.favoriteDiv}>
          <FormItem
            fieldName="add-card-modal-favorite"
            form={form}
            initialValue={false}
            label="Favorite"
          >
            <FavoriteButton size={26} />
          </FormItem>
        </div>
      </div>
      <div className={styles.buttonsDiv}>
        <Button htmlType="submit" label="Add" isWaiting={isWaiting} />
        <Button label="Cancel" onClick={handleCancel} type="tertiary" />
      </div>
    </>
  );
};

export default AddCardModalFormComponent;
