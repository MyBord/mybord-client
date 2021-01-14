import * as React from 'react';
import Checkbox from 'inputs/checkbox/checkbox';
import * as styles from './popCheckboxMenu.module.less';

interface Props {
  options: {
    label: string;
  }[];
}

type CheckboxState = Record<number, boolean>;

const getInitialState = (n: number): CheckboxState => {
  const state: CheckboxState = {};
  let i: number;
  for (i = 0; i < n; i += 1) {
    state[i] = false;
  }

  return state;
};

const PopCheckboxMenuContent: React.FC<Props> = ({ options }) => {
  const [
    checkboxState,
    setCheckboxState,
  ] = React.useState<CheckboxState>(getInitialState(options.length));

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
