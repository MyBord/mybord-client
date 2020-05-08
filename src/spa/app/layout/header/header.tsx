import * as React from 'react';
import { motion } from 'framer-motion';
import * as sizes from 'styles/_sizes.less';
import HeaderTitles from './headerTitles/headerTitles';
import HeaderTools from './headerTools/headerTools';
import * as styles from './header.module.less';

const variants = {
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

const Header: React.FC = () => (
  <motion.header
    animate="enter"
    className={styles.header}
    initial="initial"
    variants={variants}
  >
    <HeaderTitles />
    <HeaderTools />
  </motion.header>
);

export default Header;
