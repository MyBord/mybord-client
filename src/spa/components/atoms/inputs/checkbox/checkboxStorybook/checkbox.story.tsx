import * as React from 'react';
import Typography from 'typography/typography';
import Checkbox from '../checkbox';

const CheckboxStory: React.FC = () => {
  const [isCheckedOne, setIsCheckedOne] = React.useState<boolean>(false);
  const [isCheckedTwo, setIsCheckedTwo] = React.useState<boolean>(false);
  const [isCheckedThree, setIsCheckedThree] = React.useState<boolean>(true);
  const [isCheckedFour, setIsCheckedFour] = React.useState<boolean>(true);

  return (
    <>
      <Typography size="h1" text="Standard Checkbox" />
      <Typography size="h3" text="False" />
      <Checkbox
        checked={isCheckedOne}
        onClick={() => setIsCheckedOne((prevState) => !prevState)}
      />
      <Typography size="h3" text="False w/ Label" />
      <Checkbox
        checked={isCheckedTwo}
        label="Lorem Ipsum"
        onClick={() => setIsCheckedTwo((prevState) => !prevState)}
      />
      <Typography size="h3" text="True" />
      <Checkbox
        checked={isCheckedThree}
        onClick={() => setIsCheckedThree((prevState) => !prevState)}
      />
      <Typography size="h3" text="True w/ Label" />
      <Checkbox
        checked={isCheckedFour}
        label="Lorem Ipsum"
        onClick={() => setIsCheckedFour((prevState) => !prevState)}
      />
      <Typography size="h1" text="Disabled Checkbox" />
      <Typography size="h3" text="False" />
      <Checkbox
        checked={false}
        disabled
        onClick={() => {}}
      />
      <Typography size="h3" text="False w/ Label" />
      <Checkbox
        checked={false}
        disabled
        label="Lorem Ipsum"
        onClick={() => {}}
      />
      <Typography size="h3" text="True" />
      <Checkbox
        checked={false}
        disabled
        label="Lorem Ipsum"
        onClick={() => {}}
      />
      <Typography size="h3" text="True" />
      <Checkbox
        checked={false}
        disabled
        label="Lorem Ipsum"
        onClick={() => {}}
      />
    </>
  );
};

export default CheckboxStory;
