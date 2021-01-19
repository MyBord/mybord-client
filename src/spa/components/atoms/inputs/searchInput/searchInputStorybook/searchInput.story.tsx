import * as React from 'react';
import Typography from 'typography/typography';
import SearchInput from '../searchInput';

const SearchInputStory: React.FC = () => (
  <>
    <Typography type="h1" text="Standard Search Input" />
    <SearchInput />
  </>
);

export default SearchInputStory;
