import * as React from 'react';
import Typography from 'typography/typography';
import * as styles from './cardMenuButton.module.less';

const CardMenuButtonContent: React.FC = () => (
  <ul className={styles.ul}>
    <li>
      <Typography size="two" text="edit" />
    </li>
    <li>
      <Typography size="two" text="to do" />
    </li>
    <li>
      <Typography size="two" text="delete" />
    </li>
  </ul>
);

export default CardMenuButtonContent;
