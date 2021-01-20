import * as React from 'react';
import Checkbox from 'inputs/checkbox/checkbox';
import { CheckboxOptions } from 'types/inputTypes';
import * as styles from './popCheckboxMenu.module.less';

interface Props {
  options: CheckboxOptions;
}

const PopCheckboxMenuContent: React.FC<Props> = ({ options }) => {
  const [finalOptions, setFinalOptions] = React.useState<CheckboxOptions>(options);

  const handleClick = (label: string): void => {
    setFinalOptions((prevState) => prevState.map((option) => {
      if (option.label === label) {
        return {
          ...option,
          value: !option.value,
        };
      }

      return { ...option };
    }));
  };

  return (
    <div className={styles.divContainer}>
      {
        finalOptions.map((option, index) => (
          <div className={styles.checkboxDiv}>
            <Checkbox
              key={`${option.label}-${index}`}
              checked={option.value}
              label={option.label}
              onClick={() => handleClick(option.label)}
            />
          </div>
        ))
      }
    </div>
  );
};

export default PopCheckboxMenuContent;
