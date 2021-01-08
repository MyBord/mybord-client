import * as React from 'react';
import Tag from 'tags/tag';
import * as styles from './userCardFooter.module.less';

const UserCardFooter: React.FC = () => (
  <div className={styles.footerContainer}>
    <hr className={styles.hr} />
    <div className={styles.tagContainer}>
      {/*<Tag color="blue" label="lorem ipsum" />*/}
      {/*<Tag color="green" label="lorem" />*/}
      {/*<Tag color="orange" label="lorem" />*/}
      {/*<Tag color="purple" label="lorem ipsum" />*/}
      {/*<Tag color="red" label="lorem ipsum dolor" />*/}
      {/*<Tag color="yellow" label="lorem" />*/}
    </div>
  </div>
);

export default UserCardFooter;
