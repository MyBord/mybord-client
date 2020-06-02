import * as React from 'react';
import { motion } from 'framer-motion';
import * as sizes from 'styles/_sizes.less';
import * as styles from './navigationAnimation.module.less';

export const variants = {
  initial: {
    width: 0,
  },
  enter: {
    width: sizes.navWidth,
    transition: { ease: 'easeOut', duration: 0.4 },
  },
};

interface Props {
  children: React.ReactNode;
}

const NavigationAnimation: React.FC<Props> = ({ children }) => (
  <motion.nav
    animate="enter"
    className={styles.navigation}
    initial="initial"
    variants={variants}
  >
    {children}
  </motion.nav>
);

export default NavigationAnimation;
