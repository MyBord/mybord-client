import * as React from 'react';
import { loremIpsum } from 'utils/loremIpsum';
import Typography from '../typography';

const TypographyStory: React.FC = () => (
  <>
    <Typography type="h1" text="Headers" />
    <Typography type="h3" text="h1" />
    <Typography type="h1" text="Lorem ipsum dolor sit amet" />
    <Typography type="h3" text="h2" />
    <Typography type="h2" text="Lorem ipsum dolor sit amet" />
    <Typography type="h3" text="h3" />
    <Typography type="h3" text="Lorem ipsum dolor sit amet" />
    <Typography type="h3" text="h4" />
    <Typography type="h4" text="Lorem ipsum dolor sit amet" />
    <Typography type="h3" text="h5" />
    <Typography type="h5" text="Lorem ipsum dolor sit amet" />
    <Typography type="h3" text="h6" />
    <Typography type="h6" text="Lorem ipsum dolor sit amet" />
    <Typography type="h1" text="Bodies" />
    <Typography type="h3" text="body large" />
    <Typography type="bodyLarge" text={loremIpsum} />
    <Typography type="h3" text="body default" />
    <Typography type="bodyDefault" text={loremIpsum} />
    <Typography type="h3" text="body small" />
    <Typography type="bodySmall" text={loremIpsum} />
  </>
);

export default TypographyStory;
