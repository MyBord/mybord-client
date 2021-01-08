import * as React from 'react';
import Typography from 'typography/typography';
import Button from '../button';

const ButtonStory: React.FC = () => (
  <>
    <Typography size="h1" text="Primary Buttons" />
    <Typography size="h3" text="Default" />
    <Button label="lorem ipsum" />
    <Typography size="h1" text="Secondary Buttons" />
    <Typography size="h3" text="Default" />
    <Button label="lorem ipsum" type="secondary" />
  </>
);

export default ButtonStory;
