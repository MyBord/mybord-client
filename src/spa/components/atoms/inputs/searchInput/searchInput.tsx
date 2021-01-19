import * as React from 'react';
import TextInput from 'inputs/textInput/textInput';
import { SetState } from 'types/reactTypes';

interface Props {
  mutateValues: SetState<string[]>;
  resetValues: () => void;
}

const SearchInput: React.FC<Props> = ({ mutateValues, resetValues }) => {
  const handleChange = (value: string): void => {
    if (value.length === 0) {
      resetValues();
    } else {
      mutateValues((prevState) => prevState.filter((i) => i.includes(value)));
    }
  };

  return (
    <TextInput
      iconName="search"
      onChange={handleChange}
      placeholder="Search ..."
    />
  );
};

export default SearchInput;
