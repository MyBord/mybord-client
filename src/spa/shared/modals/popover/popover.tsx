import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import * as styles from './popover.module.less';

const variants = {
  initial: {
    maxHeight: 0,
    opacity: 0,
    transition: { duration: 0.5, ease: 'easeIn' },
  },
  enter: {
    maxHeight: '64px',
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeIn' },
  },
  exit: {
    maxHeight: 0,
    opacity: 0,
    transition: { duration: 0.5, ease: 'easeIn' },
  },
};

interface Props {
  Content: React.FC;
  gap: number;
  placement?: 'left' | 'right';
  show: boolean;
}

const Popover = React.forwardRef<HTMLDivElement, Props>((
  {
    Content,
    gap,
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
            // animate={{ opacity: 1 }}
            animate="enter"
            className={styles.div}
            // initial={{ maxHeight: 0, opacity: 0 }}
            // initial={{ opacity: 0 }}
            initial="initial"
            // exit={{ maxHeight: 0, opacity: 0 }}
            // exit={{ opacity: 0 }}
            exit="exit"
            style={{ top: `${gap}rem`, [placement]: 0 }}
            variants={variants}
          >
            <Content />
          </motion.div>
        )
      }
    </AnimatePresence>
  );
});

export default Popover;
