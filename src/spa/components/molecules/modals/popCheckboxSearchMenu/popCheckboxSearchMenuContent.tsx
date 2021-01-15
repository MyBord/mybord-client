import * as React from 'react';
import Button from 'buttons/button/button';
import Checkbox from 'inputs/checkbox/checkbox';
import Hr from 'atoms/hr/hr';
import TextInput from 'inputs/textInput/textInput';
import Typography from 'typography/typography';
import { CheckboxState, getInitialCheckboxState } from 'modals/modalUtils/checkboxState';
import * as styles from './popCheckboxSearchMenu.module.less';

interface Props {
  options: {
    label: string;
  }[];
  title: string;
}

const PopCheckboxSearchMenuContent: React.FC<Props> = ({
  options,
  title,
}) => {
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
      <div className={styles.typographyDiv}>
        <Typography hasMargin={false} text={title} type="h5" />
      </div>
      <Hr />
      <TextInput />
      <Hr />
      <div className={styles.optionsContainer}>
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
      <Hr />
      <div className={styles.footerDivContainer}>
        <Checkbox
          checked={false}
          label="Select All"
          onClick={() => {}}
        />
        <Button label="Apply" />
      </div>
    </div>
  );
};

export default PopCheckboxSearchMenuContent;
