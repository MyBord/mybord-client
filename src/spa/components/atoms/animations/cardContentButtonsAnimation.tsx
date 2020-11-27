import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as styles from './cardContentButtonsAnimation.module.less';

const variants = {
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
  initial: { opacity: 1.0 },
};

interface Props {
  children: React.ReactNode;
  showButtons: boolean;
}

const CardContentButtonsAnimation: React.FC<Props> = ({ children, showButtons }) => (
  <AnimatePresence>
    {showButtons && (
      <motion.div
        animate="enter"
        className={styles.div}
        exit="exit"
        initial="initial"
        variants={variants}
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

export default CardContentButtonsAnimation;
