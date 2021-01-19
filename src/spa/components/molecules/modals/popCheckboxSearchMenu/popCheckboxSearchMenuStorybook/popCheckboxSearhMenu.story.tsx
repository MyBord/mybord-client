import * as React from 'react';
import Typography from 'typography/typography';
import { PopOverBox } from 'storybook/commonStorybookComponents';
import PopCheckboxSearchMenu from '../popCheckboxSearchMenu';

const options = [
  { label: 'Lorem Ipsum', value: true },
  { label: 'Dolor Sit Amet', value: true },
  { label: 'Consectetur', value: true },
  { label: 'Adipiscing', value: false },
  { label: 'Elit', value: false },
  { label: 'Volutpat', value: true },
  { label: 'Risus Cras', value: true },
  { label: 'Pretium', value: false },
  { label: 'Senectus', value: false },
];

const PopCheckboxSearchMenuStory: React.FC = () => (
  <>
    <Typography text="Standard PopCheckboxSearchMenu" type="h1" />
    <PopCheckboxSearchMenu options={options} title="Title">
      <PopOverBox />
    </PopCheckboxSearchMenu>
  </>
);

export default PopCheckboxSearchMenuStory;
