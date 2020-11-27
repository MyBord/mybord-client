import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { getUnit, makeUnit } from 'utils/cssUtils';
import * as sizes from 'styles/_sizes.less';
import * as styles from './toastAnimation.module.less';

const initialRightUnit = makeUnit(-1 * (getUnit(sizes.toastWidth, 'rem') + 2), 'rem');

interface Props {
  children: React.ReactNode;
  isVisible: boolean;
}

const ToastAnimation: React.FC<Props> = ({ children, isVisible }) => (
  <AnimatePresence>
    {
      isVisible && (
      <motion.section
        className={styles.section}
        initial={{ right: initialRightUnit, opacity: 0.5 }}
        animate={{ right: '1rem', opacity: 1 }}
        transition={{ duration: 0.7 }}
        exit={{ right: initialRightUnit, opacity: 0.5 }}
      >
        {children}
      </motion.section>
      )
    }
  </AnimatePresence>
);

export default ToastAnimation;
