import * as React from 'react';
import * as styles from './cardMenuButton.module.less';

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CardMenuButton: React.FC<Props> = ({ onClick }) => (
  <button className={styles.button} onClick={onClick} type="button">
    <div className={styles.div}>
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
    </div>
  </button>
);

export default CardMenuButton;
