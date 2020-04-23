import * as React from 'react';
import Typography from 'typography/typography';
import * as styles from './headerProfilePopoverContent.module.less';

const HeaderProfilePopoverContent: React.FC = () => (
  <ul className={styles.ul}>
    <li>
      <Typography
        // iconName="logout"
        iconName="warning"
        onClick={() => console.log('logout')}
        size="three"
        text="Logout"
      />
    </li>
    <li>
      <Typography
        iconName="warning"
        link="trending"
        size="three"
        text="About MyBord"
      />
    </li>
  </ul>
);

export default HeaderProfilePopoverContent;
