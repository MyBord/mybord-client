import * as React from 'react';
import { motion } from 'framer-motion';
import HamburgerButton from 'buttons/hamburgerButton/hamburgerButton';
import NavigationButton from 'buttons/navigationButton/navigationButton';
import useToggleLottie from 'hooks/useToggleLottie';
import * as styles from './navigation.module.scss';

const variants = {
  collapsed: { width: styles.navWidthCollapsed },
  expanded: { width: styles.navWidthExpanded },
};

const Navigation: React.FC = () => {
  const [direction, isStopped, toggleLottie] = useToggleLottie();
  const [isExpanded, setIsExpanded] = React.useState(false);
  const navigationRef = React.useRef(null);

  const handleClickOutside = (event: MouseEvent): void => {
    if (!navigationRef.current.contains(event.target)) {
      setIsExpanded(false);
      if (isExpanded) {
        toggleLottie();
      }
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  const handleClick = (): void => {
    setIsExpanded(!isExpanded);
    toggleLottie();
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
      <NavigationButton
        iconName="dashboard"
        label="Dashboard"
        to=""
      />
      <NavigationButton
        active
        iconName="user"
        label="Following"
        to="following"
      />
      <NavigationButton
        iconName="chart"
        label="Trending"
        to="trending"
      />
    </motion.nav>
  );
};

export default Navigation;
