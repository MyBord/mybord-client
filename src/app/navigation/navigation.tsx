import * as React from 'react';
import { motion } from 'framer-motion';
import HamburgerButton from 'buttons/hamburgerButton/hamburgerButton';
import Icon from 'icons/icon/icon';
import * as styles from './navigation.module.scss';

const variants = {
  collapsed: { width: styles.navWidthCollapsed },
  expanded: { width: styles.navWidthExpanded },
};

const Navigation: React.FC = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const navigationRef = React.useRef(null);

  const handleClickOutside = (event: MouseEvent): void => {
    if (!navigationRef.current.contains(event.target)) {
      setIsExpanded(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  return (
    <motion.nav
      animate={isExpanded ? 'expanded' : 'collapsed'}
      className={styles.nav}
      ref={navigationRef}
      initial={false}
      variants={variants}
    >
      <HamburgerButton onClick={() => setIsExpanded(!isExpanded)} />
      <Icon iconName="user" size={60} />
    </motion.nav>
  );
};

export default Navigation;
