import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { modalVariants } from './commonVariants';
import * as styles from './modalAnimation.module.less';

interface Props {
  children: React.ReactNode;
  isVisible: boolean;
}

const ModalAnimation: React.FC<Props> = ({ children, isVisible }) => (
  <AnimatePresence>
    {
      isVisible && (
      <motion.section
        animate="enter"
        className={styles.section}
        exit="exit"
        initial="initial"
        variants={modalVariants}
      >
        {children}
      </motion.section>
      )
    }
  </AnimatePresence>
);

export default ModalAnimation;
