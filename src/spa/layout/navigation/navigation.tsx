import * as React from 'react';
import NavigationButtons from './navigationButtons/navigationButtons';
import NavigationLogo from './navigationLogo/navigationLogo';
import * as styles from './navigation.module.less';

const Navigation: React.FC = () => (
  <nav className={styles.nav}>
    <NavigationLogo />
    <NavigationButtons />
  </nav>
);

export default Navigation;
