import * as React from 'react';
import HeaderTitles from './headerTitles/headerTitles';
import * as styles from './header.module.scss';

const Header: React.FC = () => (
  <header className={styles.header}>
    <HeaderTitles />
  </header>
);

export default Header;
