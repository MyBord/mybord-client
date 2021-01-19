import * as React from 'react';
import TextInput from 'inputs/textInput/textInput';

interface Props {
  onSearch: (value: string) => void;
  onReset: () => void;
}

const SearchInput: React.FC<Props> = ({ onSearch, onReset }) => {
  const handleChange = (value: string): void => {
    if (value.length === 0) {
      onReset();
    } else {
      onSearch(value);
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
