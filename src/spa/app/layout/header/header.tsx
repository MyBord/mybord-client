import * as React from 'react';
import HeaderTitles from './headerTitles/headerTitles';
import HeaderTools from './headerTools/headerTools';
import * as styles from './header.module.less';

const Header: React.FC = () => (
  <header className={styles.header}>
    <HeaderTitles />
    <HeaderTools />
  </header>
);

export default Header;
