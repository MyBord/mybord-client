import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import * as styles from './popover.module.less';

const variants = {
  initial: {
    opacity: 1,
    transition: { duration: 0.1 },
  },
  enter: {
    opacity: 1,
    transition: { duration: 0.1 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.1 },
  },
};

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
  <AnimatePresence>
    { show && (
    <motion.div
      animate="enter"
      className={styles.div}
      exit="exit"
      initial="initial"
      ref={ref}
      style={{ bottom: `-${bottom}rem`, [placement]: 0 }}
      variants={variants}
    >
      <Content />
    </motion.div>
    )}
  </AnimatePresence>
));

export default Popover;
