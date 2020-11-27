import * as React from 'react';
import { Empty as AntEmpty } from 'antd';
import * as styles from './empty.module.less';

const Empty: React.FC = () => (
  <div className={styles.div}>
    <AntEmpty
      description={false}
      image={AntEmpty.PRESENTED_IMAGE_SIMPLE}
    />
  </div>
);

export default Empty;
