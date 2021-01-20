import { CheckboxOptions, CheckboxOptionsWithVisibility } from 'types/inputTypes';

export const getCheckboxVisibilityOptions = (
  options: CheckboxOptions,
): CheckboxOptionsWithVisibility => (
  options.map((option) => ({
    ...option,
    isVisible: true,
  }))
);
