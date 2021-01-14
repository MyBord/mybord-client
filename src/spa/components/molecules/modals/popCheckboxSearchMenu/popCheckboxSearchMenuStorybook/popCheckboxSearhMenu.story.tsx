import * as React from 'react';
import Typography from 'typography/typography';
import { PopOverBox } from 'storybook/commonStorybookComponents';
import PopCheckboxSearchMenu from '../popCheckboxSearchMenu';

const options = [
  { label: 'Lorem Ipsum' },
  { label: 'Dolor Sit Amet' },
  { label: 'Consectetur Adipiscing Elit' },
];

const PopCheckboxSearchMenuStory: React.FC = () => (
  <>
    <Typography text="Standard PopCheckboxSearchMenu" type="h1" />
    <PopCheckboxSearchMenu options={options}>
      <PopOverBox />
    </PopCheckboxSearchMenu>
  </>
);

export default PopCheckboxSearchMenuStory;
