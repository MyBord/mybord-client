import * as React from 'react';
import * as styles from './popover.module.less';

interface Props {
  Content: React.FC;
  children: React.ReactNode;
  show: boolean;
}

const Popover: React.FC<Props> = ({
  Content,
  children,
  show,
}) => (
  <>
    { show && (
      <div className={styles.div}>
        <Content />
      </div>
    )}
    {children}
  </>
);

export default Popover;
