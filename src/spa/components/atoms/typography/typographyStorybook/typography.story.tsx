import * as React from 'react';
import { loremIpsum } from 'utils/loremIpsum';
import Typography from '../typography';

const TypographyStory: React.FC = () => (
  <>
    <Typography size="h1" text="Headers" />
    <Typography size="h3" text="h1" />
    <Typography size="h1" text="Lorem ipsum dolor sit amet" />
    <Typography size="h3" text="h2" />
    <Typography size="h2" text="Lorem ipsum dolor sit amet" />
    <Typography size="h3" text="h3" />
    <Typography size="h3" text="Lorem ipsum dolor sit amet" />
    <Typography size="h3" text="h4" />
    <Typography size="h4" text="Lorem ipsum dolor sit amet" />
    <Typography size="h3" text="h5" />
    <Typography size="h5" text="Lorem ipsum dolor sit amet" />
    <Typography size="h3" text="h6" />
    <Typography size="h6" text="Lorem ipsum dolor sit amet" />
    <Typography size="h1" text="Bodies" />
    <Typography size="h3" text="body large" />
    <Typography size="bodyLarge" text={loremIpsum} />
    <Typography size="h3" text="body default" />
    <Typography size="bodyDefault" text={loremIpsum} />
    <Typography size="h3" text="body small" />
    <Typography size="bodySmall" text={loremIpsum} />
  </>
);

export default TypographyStory;