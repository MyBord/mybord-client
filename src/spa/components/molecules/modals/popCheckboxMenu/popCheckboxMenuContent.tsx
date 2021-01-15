import * as React from 'react';
import Checkbox from 'inputs/checkbox/checkbox';
import { CheckboxState, getInitialCheckboxState } from 'modals/modalUtils/checkboxState';
import * as styles from './popCheckboxMenu.module.less';

interface Props {
  options: {
    label: string;
  }[];
}

const PopCheckboxMenuContent: React.FC<Props> = ({ options }) => {
  const [
    checkboxState,
    setCheckboxState,
  ] = React.useState<CheckboxState>(getInitialCheckboxState(options.length));

  const handleClick = (i: number): void => {
    setCheckboxState((prevState) => ({
      ...prevState,
      [i]: !prevState[i],
    }));
  };

  return (
    <div className={styles.divContainer}>
      {
        options.map((option, index) => (
          <div className={styles.checkboxDiv}>
            <Checkbox
              key={`${option.label}-${index}`}
              checked={checkboxState[index]}
              label={option.label}
              onClick={() => handleClick(index)}
            />
          </div>
        ))
      }
    </div>
  );
};

export default PopCheckboxMenuContent;
