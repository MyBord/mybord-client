import * as React from 'react';
import * as styles from './cardDescription.module.less';

interface Props {
  Description: React.FC;
}

const CardDescription: React.FC<Props> = ({ Description }) => (
  <div className={styles.div}>
    <Description />
  </div>
);

export default CardDescription;
