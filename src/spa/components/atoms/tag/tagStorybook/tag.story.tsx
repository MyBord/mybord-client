import * as React from 'react';
import Typography from 'typography/typography';
import Tag from '../tag';

const TagStory: React.FC = () => (
  <>
    <Typography text="Colors" type="h1" />
    <Typography text="Purple Tag" type="h3" />
    <Tag color="purple" label="lorem" />
    <Typography text="Pink Tag" type="h3" />
    <Tag color="pink" label="lorem" />
    <Typography text="Yellow Tag" type="h3" />
    <Tag color="yellow" label="lorem" />
    <Typography text="Blue Tag" type="h3" />
    <Tag color="blue" label="lorem" />
    <Typography text="Other Tags" type="h1" />
    <Typography text="Ellipsis Tag" type="h3" />
    <Tag color="purple" ellipsis />
  </>
);

export default TagStory;
