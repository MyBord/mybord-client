import * as React from 'react';
import * as styles from './playButton.module.scss';

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const PlayButton: React.FC<Props> = ({ onClick }) => (
  <button className={styles.button} onClick={onClick} type="button">
    <div className={styles.arrowContainer}>
      <div className={styles.arrow} />
    </div>
  </button>
);

export default PlayButton;
