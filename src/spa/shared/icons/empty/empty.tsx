import * as React from 'react';
import { Empty as AntEmpty } from 'antd';
import * as styles from './empty.module.less';

interface Props {
  text: string;
}

const Empty: React.FC<Props> = ({ text }) => (
  <AntEmpty
    description={text}
    image={AntEmpty.PRESENTED_IMAGE_SIMPLE}
  />
);

export default Empty;
