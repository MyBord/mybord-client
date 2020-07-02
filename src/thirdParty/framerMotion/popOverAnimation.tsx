import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PopOverProps, PopOverStyle } from 'types/modalTypes';
import * as styles from './popOverAnimation.module.less';

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

interface Props {
  children: PopOverProps['children'];
  showPopOver: boolean;
  style?: PopOverStyle;
}

const PopOverAnimation = React.forwardRef<HTMLDivElement, Props>((
  {
    children,
    showPopOver,
    style,
  },
  ref,
) => (
  <AnimatePresence>
    {
      showPopOver && (
        <motion.div
          animate="enter"
          className={styles.div}
          exit="exit"
          initial="initial"
          ref={ref}
          style={style}
          variants={variants}
        >
          {children}
        </motion.div>
      )
    }
  </AnimatePresence>
));

export default PopOverAnimation;
