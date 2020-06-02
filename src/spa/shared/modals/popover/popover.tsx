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
  // const PopoverContent: React.FC = () => (
  //   <AnimatePresence>
  //     { show && (
  //       <motion.div
  //         animate="enter"
  //         className={styles.div}
  //         exit="exit"
  //         initial="initial"
  //         style={{ bottom: `-${bottom}rem`, [placement]: 0 }}
  //         variants={variants}
  //       >
  //         <Content />
  //       </motion.div>
  //     )}
  //   </AnimatePresence>
  // );

  // if (ref) {
  //   return (
  //     <div ref={ref}>
  //       <PopoverContent />
  //     </div>
  //   );
  // }

  return (
    <AnimatePresence>
      {
        show && (
          <motion.div
            // animate={{ maxHeight: '40px', opacity: 1 }}
            animate={{ opacity: 1 }}
            className={styles.div}
            // initial={{ maxHeight: 0, opacity: 0 }}
            // exit={{ maxHeight: 0, opacity: 0 }}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            style={{ bottom: `-${bottom}rem`, [placement]: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Content />
          </motion.div>
        )
      }
    </AnimatePresence>
  );
});

export default Popover;
