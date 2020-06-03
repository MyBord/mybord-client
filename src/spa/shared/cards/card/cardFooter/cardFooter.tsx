import * as React from 'react';
import Tag from 'tags/tag';
import * as styles from './cardFooter.module.less';

const CardFooter: React.FC = () => (
  <div className={styles.container}>
    <hr className={styles.hr} />
    <Tag label="foo bar" />
  </div>
);

export default CardFooter;
