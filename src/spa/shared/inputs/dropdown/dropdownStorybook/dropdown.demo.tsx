import * as React from 'react';
import * as styles from 'storybook/storybook.module.less';
import { mockDropdownOptions } from 'mockData/inputsMockData';
import Form from 'forms/form/form';
import FormItem from 'forms/formItem/formItem';
import Dropdown from '../dropdown';

const DropdownDemo: React.FC = () => (
  <Form>
    <h3 className={styles.h3}>Main Dropdown</h3>
    <FormItem fieldName="main-dropdown">
      <Dropdown options={mockDropdownOptions} />
    </FormItem>
    <h3 className={styles.h3}>Multi-Select Dropdown</h3>
    <FormItem fieldName="multi-dropdown">
      <Dropdown multiSelect options={mockDropdownOptions} />
    </FormItem>
  </Form>
);

export default DropdownDemo;
