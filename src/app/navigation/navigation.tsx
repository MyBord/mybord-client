import * as React from 'react';
import { motion } from 'framer-motion';
import HamburgerButton from 'buttons/hamburgerButton/hamburgerButton';
import * as styles from './navigation.module.scss';

const variants = {
  collapsed: { width: styles.navWidthCollapsed },
  expanded: { width: styles.navWidthExpanded },
};

const Navigation: React.FC = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  return (
    <motion.nav
      className={styles.nav}
      initial={false}
      animate={isExpanded ? 'expanded' : 'collapsed'}
      variants={variants}
    >
      <HamburgerButton onClick={() => setIsExpanded(!isExpanded)} />
    </motion.nav>
  );
};

export default Navigation;
