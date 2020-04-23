import * as React from 'react';
import Typography from 'typography/typography';
import * as styles from './headerProfile.module.less';

const HeaderProfilePopoverContent: React.FC = () => (
  <ul className={styles.ul}>
    <li>
      <Typography
        iconName="logout"
        onClick={() => console.log('logout')}
        size="three"
        text="Logout"
      />
    </li>
    <li>
      <Typography
        iconName="about"
        link="trending"
        size="three"
        text="About MyBord"
      />
    </li>
  </ul>
);

export default HeaderProfilePopoverContent;
