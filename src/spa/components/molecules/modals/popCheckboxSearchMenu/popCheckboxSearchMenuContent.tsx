import * as React from 'react';
import Button from 'buttons/button/button';
import Checkbox from 'inputs/checkbox/checkbox';
import Hr from 'atoms/hr/hr';
import SearchInput from 'inputs/searchInput/searchInput';
import Typography from 'typography/typography';
import { CheckboxOptions, CheckboxOptionsWithVisibility } from 'types/inputTypes';
import { getCheckboxVisibilityOptions } from 'modals/modalUtils/getCheckboxVisibilityOptions';
import * as styles from './popCheckboxSearchMenu.module.less';

interface Props {
  options: CheckboxOptions;
  title: string;
}

const PopCheckboxSearchMenuContent: React.FC<Props> = ({
  options,
  title,
}) => {
  const [
    finalOptions,
    setFinalOptions,
  ] = React.useState<CheckboxOptionsWithVisibility>(getCheckboxVisibilityOptions(options));

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

  const handleSearch = (value: string): void => {
    setFinalOptions((prevState) => prevState.map((option) => {
      if (option.label.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
        return {
          ...option,
          isVisible: true,
        };
      } else {
        return {
          ...option,
          isVisible: false,
        };
      }
    }));
  };

  const handleReset = (): void => {
    setFinalOptions((prevState) => prevState.map((option) => {
      if (!option.isVisible) {
        return {
          ...option,
          isVisible: !option.isVisible,
        };
      }

      return { ...option };
    }));
  };

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
          finalOptions.filter((option) => option.isVisible).map((option, index) => (
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
