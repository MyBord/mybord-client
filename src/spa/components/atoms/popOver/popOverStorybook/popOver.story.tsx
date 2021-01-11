import * as React from 'react';
import Typography from 'typography/typography';
import PopOver from '../popOver';

const PopOverStory: React.FC = () => (
  <>
    <Typography size="h1" text="Standard PopOver" />
    <PopOver Content={<h1>hello world</h1>}>
      <h1>hello world</h1>
    </PopOver>
  </>
);

export default PopOverStory;
