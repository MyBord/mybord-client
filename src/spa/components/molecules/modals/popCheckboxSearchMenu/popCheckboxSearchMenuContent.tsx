import * as React from 'react';
import Button from 'buttons/button/button';
import Checkbox from 'inputs/checkbox/checkbox';
import Hr from 'atoms/hr/hr';
import SearchInput from 'inputs/searchInput/searchInput';
import TextInput from 'inputs/textInput/textInput';
import Typography from 'typography/typography';
import { CheckboxOptions } from 'types/inputTypes';
import * as styles from './popCheckboxSearchMenu.module.less';

interface Props {
  options: CheckboxOptions;
  title: string;
}

const PopCheckboxSearchMenuContent: React.FC<Props> = ({
  options,
  title,
}) => {
  const [finalOptions, setFinalOptions] = React.useState<CheckboxOptions>(options);

  const handleClick = (label: string): void => {
    setFinalOptions((prevState) => prevState.map((option) => {
      if (option.label === label) {
        return { label: option.label, value: !option.value };
      }

      return { label: option.label, value: option.value };
    }));
  };

  const handleSearch = (value: string): void => {
    console.log('foo');
  };

  const handleReset = (): void => setFinalOptions(options);

  return (
    <div className={styles.divContainer}>
      <div className={styles.typographyDiv}>
        <Typography hasMargin={false} text={title} type="h5" />
      </div>
      <Hr />
      <div className={styles.searchInputDiv}>
        <SearchInput onSearch={handleSearch} onReset={handleReset} />
      </div>
      <Hr />
      <div className={styles.optionsContainer}>
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
