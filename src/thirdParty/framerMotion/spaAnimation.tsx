import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import * as styles from './animations.module.less';

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 1.0 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 1.0 },
  },
};

interface Props {
  children: React.ReactNodeArray;
  isAuthenticated: boolean;
}

const SpaAnimation: React.FC<Props> = ({ children, isAuthenticated }) => (
  <AnimatePresence>
    {
      isAuthenticated && (
        <motion.div
          animate="enter"
          className={styles.spaParentDiv}
          exit="exit"
          initial="initial"
          key="isAuthenticated"
          variants={variants}
        >
          <div className={styles.spaChildDiv}>
            {children[0]}
          </div>
        </motion.div>
      )
    }
    {
      !isAuthenticated && (
        <motion.div
          animate="enter"
          className={styles.spaParentDiv}
          exit="exit"
          initial="initial"
          key="isNotAuthenticated"
          variants={variants}
        >
          <div className={styles.spaChildDiv}>
            {children[1]}
          </div>
        </motion.div>
      )
    }
  </AnimatePresence>
);

export default SpaAnimation;
