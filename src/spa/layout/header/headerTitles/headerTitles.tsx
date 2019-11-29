import * as React from 'react';
import HeaderTitleButton from './headerTitleButton/headerTitleButton';
import * as styles from './headerTitles.module.scss';

const HeaderTitles: React.FC = () => (
  <div className={styles.div}>
    <HeaderTitleButton label="MyBord" link="myBord" />
    <HeaderTitleButton label="Trending" link="trending" />
    <HeaderTitleButton label="Following" link="following" />
  </div>
);

export default HeaderTitles;
