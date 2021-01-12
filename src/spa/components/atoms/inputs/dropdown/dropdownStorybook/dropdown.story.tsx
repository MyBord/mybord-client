import * as React from 'react';
import Typography from 'typography/typography';
import Dropdown from '../dropdown';

const mockOptions = [
  { label: 'Option 1', value: 'option-1' },
  { label: 'Option 2', value: 'option-2' },
  { label: 'Option 3', value: 'option-3' },
  { label: 'Option 4', value: 'option-4' },
]

const CheckboxStory: React.FC = () => {
  const [isCheckedOne, setIsCheckedOne] = React.useState<boolean>(false);

  return (
    <>
      <Typography size="h1" text="Standard Dropdown" />
      <Dropdown options={mockOptions} />
    </>
  );
};

export default CheckboxStory;
