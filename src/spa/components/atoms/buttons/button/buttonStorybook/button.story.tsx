import * as React from 'react';
import Typography from 'typography/typography';
import Button from '../button';

const ButtonStory: React.FC = () => (
  <>
    <Typography type="h1" text="Primary Buttons" />
    <Typography type="h3" text="Large" />
    <Button label="lorem ipsum" size="large" />
    <Typography type="h3" text="Large w/ Icon" />
    <Button iconName="send" label="lorem ipsum" size="large" />
    <Typography type="h3" text="Default" />
    <Button label="lorem ipsum" />
    <Typography type="h3" text="Default w/ Icon" />
    <Button iconName="send" label="lorem ipsum" />
    <Typography type="h1" text="Secondary Buttons" />
    <Typography type="h3" text="Large" />
    <Button label="lorem ipsum" size="large" type="secondary" />
    <Typography type="h3" text="Large w/ Icon" />
    <Button iconName="send" label="lorem ipsum" size="large" type="secondary" />
    <Typography type="h3" text="Default" />
    <Button label="lorem ipsum" type="secondary" />
    <Typography type="h3" text="Default w/ Icon" />
    <Button iconName="send" label="lorem ipsum" type="secondary" />
    <Typography type="h1" text="Text Buttons" />
    <Typography type="h3" text="Default" />
    <Button label="lorem ipsum" type="text" />
  </>
);

export default ButtonStory;
