import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import * as styles from './alertAnimation.module.less';

interface Props {
  children: React.ReactNode;
  showAlert: boolean;
}

const AlertAnimation: React.FC<Props> = ({ children, showAlert }) => (
  <AnimatePresence>
    {
      showAlert && (
        <motion.div
          className={styles.div}
          initial={{ maxHeight: 0, opacity: 0 }}
          animate={{ maxHeight: '40px', opacity: 1 }}
          transition={{ duration: 0.6 }}
          exit={{ maxHeight: 0, opacity: 0 }}
        >
          {children}
        </motion.div>
      )
    }
  </AnimatePresence>
);

export default AlertAnimation;
