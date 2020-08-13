import * as React from 'react';
import * as styles from 'storybook/storybook.module.less';
import { mockDropdownOptions } from 'mockData/inputsMockData';
import Dropdown from '../dropdown';

const DropdownDemo: React.FC = () => (
  <>
    <h3 className={styles.h3}>Main Dropdown</h3>
    <div>
      <Dropdown options={mockDropdownOptions} />
    </div>
  </>
);

export default DropdownDemo;
