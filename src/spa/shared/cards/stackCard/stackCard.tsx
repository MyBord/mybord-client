import * as React from 'react';
import react from 'assets/icons/react.png';
import * as styles from './stackCard.module.less';

const StackCard: React.FC = () => (
  <div className={styles.div}>
    <img alt="react" className={styles.img} src={react} />
  </div>
);

export default StackCard;
