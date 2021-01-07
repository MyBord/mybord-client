import * as React from 'react';
import Typography from '../typography';

const TypographyStory: React.FC = () => (
  <>
    <h1>h1</h1>
    <Typography size="h1" text="foo bar" />
    <h1>h2</h1>
    <Typography size="h2" text="foo bar" />
    <h1>h3</h1>
    <Typography size="h3" text="foo bar" />
  </>
);

export default TypographyStory;
