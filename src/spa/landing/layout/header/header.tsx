import * as React from 'react';
import AboutPageHeader from 'header/pageHeaders/aboutPageHeader/aboutPageHeader';
import * as styles from './header.module.less';

const Header: React.FC = () => (
  <div className={styles.div}>
    <AboutPageHeader />
  </div>
);

export default Header;
