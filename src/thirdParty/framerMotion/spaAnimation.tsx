import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { getTwoChildOpacityTransition } from './commonVariants';
import * as styles from './animations.module.less';

interface Props {
  children: React.ReactNode;
  isAuthenticated: boolean;
}

const SpaAnimation: React.FC<Props> = ({ children, isAuthenticated }) => {
  const animationVariants = getTwoChildOpacityTransition(1.0);
  return (
    <AnimatePresence>
      <motion.div
        animate="enter"
        className={styles.spa}
        exit="exit"
        initial="initial"
        key={isAuthenticated ? 'isAuthenticated' : 'notAuthenticated'}
        variants={isAuthenticated ? animationVariants.lastChild : animationVariants.firstChild}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default SpaAnimation;
