import * as React from 'react';
import HeaderProfile from './headerProfile/headerProfile';
import * as styles from './header.module.less';

const Header: React.FC = () => (
  <header className={styles.header}>
    <HeaderProfile />
  </header>
);

export default Header;
