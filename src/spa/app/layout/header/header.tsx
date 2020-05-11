import * as React from 'react';
import { motion } from 'framer-motion';
import { navigationHeaderVariants } from 'framerMotion/commonVariants';
import HeaderTitles from './headerTitles/headerTitles';
import HeaderTools from './headerTools/headerTools';
import * as styles from './header.module.less';

const Header: React.FC = () => (
  <motion.header
    animate="enter"
    className={styles.header}
    initial="initial"
    variants={navigationHeaderVariants}
  >
    <HeaderTitles />
    <HeaderTools />
  </motion.header>
);

export default Header;
