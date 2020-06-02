import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import * as styles from './popover.module.less';

const variants = {
  initial: {
    opacity: 0,
    transition: { duration: 1.0 },
  },
  enter: {
    opacity: 1,
    transition: { duration: 1.0 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 4.0 },
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
) => {
  const PopoverContent: React.FC = () => (
    <AnimatePresence>
      { show && (
        <motion.div
          animate="enter"
          className={styles.div}
          exit="exit"
          initial="initial"
          style={{ bottom: `-${bottom}rem`, [placement]: 0 }}
          variants={variants}
        >
          <Content />
        </motion.div>
      )}
    </AnimatePresence>
  );

  // if (ref) {
  //   return (
  //     <div ref={ref}>
  //       <PopoverContent />
  //     </div>
  //   );
  // }

  return <PopoverContent />;
});

export default Popover;
