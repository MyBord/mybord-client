import * as React from 'react';
import Button from 'buttons/button/button';
import Dropdown from 'inputs/dropdown/dropdown';
import FavoriteButton from 'buttons/favoriteButton/favoriteButton';
import FormItem from 'forms/formItem/formItem';
import TextInput from 'inputs/textInput/textInput';
import Toggle from 'inputs/toggle/toggle';
import { AddCardModalProps } from 'types/modalTypes';
import { FormProp } from 'types/formTypes';
import * as styles from './addCardModalForm.module.less';

interface Props extends AddCardModalProps {
  form?: FormProp;
}

const dropdownOptions = [
  { label: 'Video', value: 'Video' },
];

const AddCardModalFormComponent: React.FC<Props> = ({ cardData, form }) => (
  <>
    <FormItem
      fieldName="add-card-modal-category"
      form={form}
      initialValue={cardData && cardData.category}
      label="Category"
    >
      <Dropdown options={dropdownOptions} />
    </FormItem>
    <FormItem
      fieldName="add-card-modal-title"
      form={form}
      initialValue={cardData && cardData.title}
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
      <Button htmlType="submit" label="Add" />
      <Button label="Cancel" type="tertiary" />
    </div>
  </>
);

export default AddCardModalFormComponent;
