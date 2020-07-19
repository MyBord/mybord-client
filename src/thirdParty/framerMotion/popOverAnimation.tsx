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
  children: React.ReactNode;
  color: PopOverProps['color'];
  isVisible: boolean;
  popOverStyle: PopOverStyle;
}

const PopOverAnimation = React.forwardRef<HTMLDivElement, Props>(({
  children,
  color,
  isVisible,
  popOverStyle,
}, ref) => (
  <AnimatePresence>
    {
      isVisible && (
        <motion.div
          animate="enter"
          className={[styles.div, styles[color]].join(' ')}
          exit="exit"
          initial="initial"
          ref={ref}
          style={popOverStyle}
          variants={variants}
        >
          {children}
        </motion.div>
      )
    }
  </AnimatePresence>
));

export default PopOverAnimation;
