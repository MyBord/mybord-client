import * as React from 'react';
import * as styles from './popover.module.less';

interface Props {
  Content: React.FC;
  bottom: number;
  placement?: 'left' | 'right';
  show: boolean;
}

const Popover = React.forwardRef<HTMLDivElement, Props>((
  {
    Content,
    bottom,
    placement = 'right',
    show,
  },
  ref,
) => (
  <>
    { show && (
    <div
      className={styles.div}
      ref={ref}
      style={{ bottom: `-${bottom}rem`, [placement]: 0 }}
    >
      <Content />
    </div>
    )}
  </>
));

export default Popover;
