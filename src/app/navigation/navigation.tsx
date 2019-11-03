import * as React from 'react';
import { motion } from 'framer-motion';
import HamburgerButton from 'buttons/hamburgerButton/hamburgerButton';
import NavigationButton from 'buttons/navigationButton/navigationButton';
import * as styles from './navigation.module.scss';

const variants = {
  collapsed: { width: styles.navWidthCollapsed },
  expanded: { width: styles.navWidthExpanded },
};

const Navigation: React.FC = () => {
  const [isStopped, setStop] = React.useState(true);
  const [direction, setDirection] = React.useState(1);
  const [isExpanded, setIsExpanded] = React.useState(false);
  const navigationRef = React.useRef(null);

  const toggleButton = (): void => {
    if (!isStopped) {
      setDirection(direction * -1);
    }
    setStop(false);
  };

  const handleClickOutside = (event: MouseEvent): void => {
    if (!navigationRef.current.contains(event.target)) {
      setIsExpanded(false);
      toggleButton();
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  const handleClick = (): void => {
    setIsExpanded(!isExpanded);
    toggleButton();
  };

  return (
    <motion.nav
      animate={isExpanded ? 'expanded' : 'collapsed'}
      className={styles.nav}
      initial={false}
      ref={navigationRef}
      transition={{ duration: 0.3 }}
      variants={variants}
    >
      <div className={styles.buttonDiv}>
        <HamburgerButton
          direction={direction}
          isStopped={isStopped}
          onClick={handleClick}
        />
      </div>
      <NavigationButton iconName="dashboard" label="Dashboard" />
      <NavigationButton active iconName="user" label="Following" />
      <NavigationButton iconName="chart" label="Trending" />
    </motion.nav>
  );
};

export default Navigation;
