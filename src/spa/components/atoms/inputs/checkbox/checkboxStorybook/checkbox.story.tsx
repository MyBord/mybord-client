import * as React from 'react';
import Typography from 'typography/typography';
import Checkbox from '../checkbox';

const CheckboxStory: React.FC = () => {
  const [isCheckedOne, setIsCheckedOne] = React.useState<boolean>(false);
  const [isCheckedTwo, setIsCheckedTwo] = React.useState<boolean>(true);

  return (
    <>
      <Typography size="h1" text="Standard Checkbox" />
      <Typography size="h3" text="False" />
      <Checkbox checked={isCheckedOne} onClick={() => setIsCheckedOne((prevState) => !prevState)} />
      <Typography size="h3" text="True" />
      <Checkbox checked={isCheckedTwo} onClick={() => setIsCheckedTwo((prevState) => !prevState)} />
      <Typography size="h1" text="Disabled Checkbox" />
      <Typography size="h3" text="False" />
      <Checkbox
        checked={false}
        disabled
        onClick={() => {}}
      />
      <Typography size="h3" text="True" />
      <Checkbox
        checked
        disabled
        onClick={() => {}}
      />
    </>
  );
};

export default CheckboxStory;
