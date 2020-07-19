import * as React from 'react';
import { motion } from 'framer-motion';
import { getUnit, pixelize } from 'utils/cssUtils';
import * as sizes from 'styles/_sizes.less';
import * as styles from './headerAnimation.module.less';

const initialTopUnit = -1 * (
  getUnit(sizes.headerHeight, 'rem')
  + getUnit(sizes.headerMarginTop, 'rem')
);

export const variants = {
  initial: {
    top: pixelize(initialTopUnit, 'rem'),
  },
  enter: {
    top: '0rem',
    transition: {
      ease: 'easeOut',
      duration: 0.7,
      delay: 0.75,
    },
  },
};

interface Props {
  children: React.ReactNode;
}

const HeaderAnimation: React.FC<Props> = ({ children }) => (
  <motion.section
    animate="enter"
    className={styles.section}
    initial="initial"
    variants={variants}
  >
    {children}
  </motion.section>
);

export default HeaderAnimation;
