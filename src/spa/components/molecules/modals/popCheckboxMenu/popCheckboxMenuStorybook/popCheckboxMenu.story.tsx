import * as React from 'react';
import Typography from 'typography/typography';
import { PopOverBox } from 'storybook/commonStorybookComponents';
import PopCheckboxMenu from '../popCheckboxMenu';

const options = [
  { label: 'Lorem Ipsum', value: true },
  { label: 'Dolor Sit Amet', value: false },
  { label: 'Consectetur Adipiscing Elit', value: false },
];

const PopCheckboxMenuStory: React.FC = () => (
  <>
    <Typography text="Standard PopCheckboxMenu" type="h1" />
    <PopCheckboxMenu options={options}>
      <PopOverBox />
    </PopCheckboxMenu>
  </>
);

export default PopCheckboxMenuStory;
