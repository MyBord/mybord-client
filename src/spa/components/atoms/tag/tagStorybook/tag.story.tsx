import * as React from 'react';
import Typography from 'typography/typography';
import Tag from '../tag';

const TagStory: React.FC = () => (
  <>
    <Typography text="Purple Tag" type="h3" />
    <Tag color="purple" label="lorem" />
    <Typography text="Pink Tag" type="h3" />
    <Tag color="pink" label="lorem" />
    <Typography text="Yellow Tag" type="h3" />
    <Tag color="yellow" label="lorem" />
    <Typography text="Blue Tag" type="h3" />
    <Tag color="blue" label="lorem" />
  </>
);

export default TagStory;
