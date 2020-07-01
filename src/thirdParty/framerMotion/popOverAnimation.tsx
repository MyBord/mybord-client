import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PopOverProps } from 'types/modalTypes';
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

interface Props extends PopOverProps {
  showPopOver: boolean;
  style: {
    bottom?: string;
    left?: string;
    right?: string;
    top?: string;
    transform?: string;
  };
}

const PopOverAnimation = React.forwardRef<HTMLDivElement, Props>((
  {
    children,
    showPopOver,
    style,
  },
  ref,
) => {
  const PopOverContent: React.FC = () => (
    <AnimatePresence>
      {
        showPopOver && (
          <motion.div
            animate="enter"
            className={styles.div}
            exit="exit"
            initial="initial"
            style={style}
            variants={variants}
          >
            <div ref={ref}>
              {children}
            </div>
          </motion.div>
        )
      }
    </AnimatePresence>
  );
  //
  // if (ref) {
  //   return (
  //     <div ref={ref}>
  //       <PopOverContent />
  //     </div>
  //   );
  // }

  return <PopOverContent />;
});

export default PopOverAnimation;
