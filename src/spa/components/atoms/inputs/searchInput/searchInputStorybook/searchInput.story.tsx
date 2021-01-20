import * as React from 'react';
import Typography from 'typography/typography';
import SearchInput from '../searchInput';

const values = [
  'lorem ipsum',
  'dolor sit',
  'amet',
  'consectetur',
  'adipiscing elit',
  'sed do eiusmod',
  'tempor incididunt',
  'ut labore',
  'et dolore',
  'magna aliqua',
];

const SearchInputStory: React.FC = () => {
  const [finalValues, setFinalValues] = React.useState<string[]>(values);

  const handleSearch = (value: string): void => {
    setFinalValues((prevState) => prevState.filter((i) => i.includes(value)));
  };

  const handleReset = (): void => setFinalValues(values);

  return (
    <>
      <Typography type="h1" text="Standard Search Input" />
      <SearchInput
        onSearch={handleSearch}
        onReset={handleReset}
      />
      <ul>
        {
          finalValues.map((value, index) => (
            <li key={`${value}-${index}`}>
              <Typography text={value} type="h5" />
            </li>
          ))
        }
      </ul>
    </>
  );
};

export default SearchInputStory;
