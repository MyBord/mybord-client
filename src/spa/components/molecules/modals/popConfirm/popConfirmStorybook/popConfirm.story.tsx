import * as React from 'react';
import Typography from 'typography/typography';
import { PopOverBox } from 'storybook/commonStorybookComponents';
import { loremIpsumQ } from 'utils/loremIpsum';
import PopConfirm from '../popConfirm';

const PopConfirmStory: React.FC = () => (
  <>
    <Typography type="h1" text="Standard PopConfirm" />
    <PopConfirm text={loremIpsumQ}>
      <PopOverBox />
    </PopConfirm>
  </>
);

export default PopConfirmStory;
