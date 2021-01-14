import * as React from 'react';
import Typography from 'typography/typography';
import { PopOverBox } from 'storybook/commonStorybookComponents';
import PopLinkMenu from '../popLinkMenu';

const linkOptions = [
  { label: 'My Settings', link: 'foo' },
  { label: 'About MyBord', link: 'bar' },
  { label: 'Logout', link: 'baz' },
];

const PopLinkMenuStory: React.FC = () => (
  <>
    <Typography text="Standard PopLinkMenu" type="h1" />
    <PopLinkMenu options={linkOptions}>
      <PopOverBox />
    </PopLinkMenu>
  </>
);

export default PopLinkMenuStory;
