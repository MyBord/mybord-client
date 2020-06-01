import * as React from 'react';
import * as styles from './popover.module.less';

interface Props {
  children: React.ReactNode;
}

const Popover: React.FC<Props> = ({ children }) => (
  <div className={styles.div}>
    {children}
  </div>
);

export default Popover;
