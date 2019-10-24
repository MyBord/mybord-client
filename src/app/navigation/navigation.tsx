import * as React from 'react';
import { motion } from 'framer-motion';
import * as styles from './navigation.module.scss';
import HamburgerButton from 'buttons/hamburgerButton/hamburgerButton';

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
      <button onClick={() => setIsExpanded(!isExpanded)} type="button">Click Me</button>
      <HamburgerButton />
    </motion.nav>
  );
};

export default Navigation;
