import * as React from 'react';
import { motion } from 'framer-motion';
import * as sizes from 'styles/_sizes.less';
import * as styles from './headerAnimation.module.less';

export const variants = {
  initial: {
    height: 0,
  },
  enter: {
    height: sizes.headerHeight,
    transition: {
      ease: 'easeOut',
      duration: 0.45,
      delay: 0.75,
    },
  },
};

interface Props {
  children: React.ReactNode;
}

const HeaderAnimation: React.FC<Props> = ({ children }) => (
  <motion.header
    animate="enter"
    className={styles.header}
    initial="initial"
    variants={variants}
  >
    {children}
  </motion.header>
);

export default HeaderAnimation;
