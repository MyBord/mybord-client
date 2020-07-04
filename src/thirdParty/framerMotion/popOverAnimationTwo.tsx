import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PopOverStyleTwo } from 'types/modalTypes';
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
  popOverRef: React.RefObject<HTMLDivElement>;
  popOverStyle: PopOverStyleTwo;
  showPopOver: boolean;
}

const PopOverAnimation: React.FC<Props> = ({
  children,
  popOverRef,
  popOverStyle,
  showPopOver,
}) => (
  <AnimatePresence>
    {
      showPopOver && (
        <motion.div
          animate="enter"
          className={styles.div}
          exit="exit"
          initial="initial"
          ref={popOverRef}
          style={popOverStyle}
          variants={variants}
        >
          {children}
        </motion.div>
      )
    }
  </AnimatePresence>
);

export default PopOverAnimation;
