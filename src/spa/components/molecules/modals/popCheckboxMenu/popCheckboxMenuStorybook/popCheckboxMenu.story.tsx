import * as React from 'react';
import Typography from 'typography/typography';
import { PopOverBox } from 'storybook/commonStorybookComponents';
import PopCheckboxMenu from '../popCheckboxMenu';

const options = [
  { label: 'lorem ipsum' },
  { label: 'dolor sit amet' },
  { label: 'consectetur adipiscing elit' },
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
