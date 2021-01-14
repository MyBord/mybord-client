import * as React from 'react';
import Checkbox from 'inputs/checkbox/checkbox';
import * as styles from './popCheckboxMenu.module.less';

interface Props {
  options: {
    label: string;
  }[];
}

const PopCheckboxMenuContent: React.FC<Props> = ({ options }) => (
  <div>
    {
      options.map((option, index) => (
        <Checkbox
          key={`${option.label}-${index}`}
          checked={false}
          label={option.label}
          onClick={() => {}}
        />
      ))
    }
  </div>

);

export default PopCheckboxMenuContent;
