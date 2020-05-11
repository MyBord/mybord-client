import * as React from 'react';
import { motion } from 'framer-motion';
import { navigationLeftPaneVariants } from 'framerMotion/commonVariants';
import NavigationButtons from './navigationButtons/navigationButtons';
import NavigationLogo from './navigationLogo/navigationLogo';
import * as styles from './navigation.module.less';

const Navigation: React.FC = () => (
  <motion.nav
    animate="enter"
    className={styles.nav}
    initial="initial"
    variants={navigationLeftPaneVariants}
  >
    <NavigationLogo />
    <NavigationButtons />
  </motion.nav>
);

export default Navigation;
