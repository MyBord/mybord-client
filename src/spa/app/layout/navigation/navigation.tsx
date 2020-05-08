import * as React from 'react';
import { motion } from 'framer-motion';
import * as sizes from 'styles/_sizes.less';
import NavigationButtons from './navigationButtons/navigationButtons';
import NavigationLogo from './navigationLogo/navigationLogo';
import * as styles from './navigation.module.less';

const variants = {
  initial: {
    width: 0,
  },
  enter: {
    width: sizes.navWidth,
    transition: { ease: 'easeOut', duration: 0.4 },
  },
};

const Navigation: React.FC = () => (
  <motion.nav
    animate="enter"
    className={styles.nav}
    initial="initial"
    variants={variants}
  >
    <NavigationLogo />
    <NavigationButtons />
  </motion.nav>
);

export default Navigation;
