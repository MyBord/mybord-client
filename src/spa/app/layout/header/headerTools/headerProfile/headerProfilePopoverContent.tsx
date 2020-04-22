import * as React from 'react';
import Typography from 'typography/typography';
import * as styles from './headerProfilePopoverContent.module.less';

const HeaderProfilePopoverContent: React.FC = () => (
  <ul className={styles.ul}>
    <li>
      <Typography
        onClick={() => console.log('logout')}
        size="large"
        text="Logout"
      />
    </li>
    <li>
      <Typography
        link="trending"
        size="large"
        text="About MyBord"
      />
    </li>
  </ul>
);

export default HeaderProfilePopoverContent;
