import * as React from 'react';
import * as styles from './playButton.module.less';

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  shouldSpin: boolean;
}

const PlayButton: React.FC<Props> = ({ onClick, shouldSpin }) => {
  const [showSpinning, setShowSpinning] = React.useState(false);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    onClick(event);
    setShowSpinning(true);
  };

  // Note: the play button should spin if the `spin` api is true (a parent component says the
  // play button should spin) AND should only spin *after* the play button has been clicked.
  return (
    <button className={styles.button} onClick={handleClick} type="button">
      {
        (showSpinning && shouldSpin) ? <h1>hello world</h1> : <h1>foo</h1>
      }
      <div className={styles.arrowContainer}>
        <div className={styles.arrow} />
      </div>
    </button>
  );
};

export default PlayButton;
