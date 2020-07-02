import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PopOverProps, PopOverStyle } from 'types/modalTypes';
import getPopOverStyle from 'modals/popOver/getPopOverStyle';
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
  caretPlacement: PopOverProps['caretPlacement'];
  children: PopOverProps['children'];
  showPopOver: boolean;
  placement: PopOverProps['placement'];
  popOverRef: React.RefObject<HTMLDivElement>;
}

const PopOverAnimation: React.FC<Props> = ({
  caretPlacement,
  children,
  placement,
  popOverRef,
  showPopOver,
}) => {
  const popOverStyle = getPopOverStyle(!!caretPlacement, placement);

  return (
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
};

export default PopOverAnimation;
