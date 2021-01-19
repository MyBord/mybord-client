import * as React from 'react';
import TextInput from 'inputs/textInput/textInput';
import { SetState } from 'types/reactTypes';

interface Props {
  mutateValues: SetState<string[]>;
  values: string[];
}

const SearchInput: React.FC<Props> = ({ mutateValues, values }) => {
  const handleChange = (value: string): void => {
    console.log(value);
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
