import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PopoverProps } from 'types/modalTypes';
import * as styles from './popoverAnimation.module.less';

const variants = {
  initial: {
    opacity: 0,
    transition: { duration: 0.2, ease: 'easeIn' },
  },
  enter: {
    opacity: 1,
    transition: { duration: 0.2, ease: 'easeIn' },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: 'easeIn' },
  },
};

interface Props extends PopoverProps {
  children: React.ReactNode;
}

const PopoverAnimation = React.forwardRef<HTMLDivElement, Props>((
  {
    children,
    gap,
    placement = 'right',
    show,
  },
  ref,
) => {
  const PopoverContent: React.FC = () => (
    <AnimatePresence>
      {
        show && (
          <motion.div
            animate="enter"
            className={styles.div}
            exit="exit"
            initial="initial"
            style={{ top: `${gap}rem`, [placement]: 0 }}
            variants={variants}
          >
            {children}
          </motion.div>
        )
      }
    </AnimatePresence>
  );

  if (ref) {
    return (
      <div ref={ref}>
        <PopoverContent />
      </div>
    );
  }

  return <PopoverContent />;
});

export default PopoverAnimation;
