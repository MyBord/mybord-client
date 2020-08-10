import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PopOverProps, PopOverStyle } from 'types/modalTypes';
import { modalVariants } from './commonVariants';
import * as styles from './popOverAnimation.module.less';

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
          variants={modalVariants}
        >
          {children}
        </motion.div>
      )
    }
  </AnimatePresence>
));

export default PopOverAnimation;
