import * as React from 'react';
import Typography from 'typography/typography';
import TextInput from '../textInput';

const TextInputStory: React.FC = () => (
  <>
    <Typography size="h1" text="Standard Text Input" />
    <Typography size="h3" text="Default" />
    <TextInput />
    <Typography size="h3" text="w/ Placeholder" />
    <TextInput placeholder="lorem ipsum dolor sit amet" />
    <Typography size="h1" text="Disabled Text Input" />
    <Typography size="h3" text="Default" />
    <TextInput disabled />
    <Typography size="h3" text="w/ Placeholder" />
    <TextInput disabled placeholder="lorem ipsum dolor sit amet" />
  </>
);

export default TextInputStory;
