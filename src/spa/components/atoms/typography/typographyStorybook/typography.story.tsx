import * as React from 'react';
import { lorem, loremIpsumLong } from 'utils/loremIpsum';
import Typography from '../typography';

const TypographyStory: React.FC = () => (
  <>
    <Typography type="h1" text="Headers" />
    <Typography type="h3" text="h1" />
    <Typography type="h1" text={lorem} />
    <Typography type="h3" text="h2" />
    <Typography type="h2" text={lorem} />
    <Typography type="h3" text="h3" />
    <Typography type="h3" text={lorem} />
    <Typography type="h3" text="h4" />
    <Typography type="h4" text={lorem} />
    <Typography type="h3" text="h5" />
    <Typography type="h5" text={lorem} />
    <Typography type="h3" text="h6" />
    <Typography type="h6" text={lorem} />
    <Typography type="h1" text="Bodies" />
    <Typography type="h3" text="body large" />
    <Typography type="bodyLarge" text={loremIpsumLong} />
    <Typography type="h3" text="body default" />
    <Typography type="bodyDefault" text={loremIpsumLong} />
    <Typography type="h3" text="body small" />
    <Typography type="bodySmall" text={loremIpsumLong} />
    <Typography type="h1" text="Links" />
    <Typography type="h3" text="link default" />
    <Typography link="/foo" type="linkDefault" text={lorem} />
  </>
);

export default TypographyStory;
