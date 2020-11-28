import * as React from 'react';
import { Empty as AntEmpty } from 'antd';

const Empty: React.FC = () => (
  <AntEmpty description={false} image={AntEmpty.PRESENTED_IMAGE_SIMPLE} />
);

export default Empty;
