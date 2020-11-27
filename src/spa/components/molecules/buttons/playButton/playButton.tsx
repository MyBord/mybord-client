import * as React from 'react';
import LottiePlayer from 'lottiePlayer/lottiePlayer';
import animationData from 'lotties/backgroundSpinner.json';
import * as styles from './playButton.module.less';

interface Props {
  onPlay: (event: React.MouseEvent<HTMLButtonElement>) => void;
  shouldSpin: boolean;
}

const PlayButton: React.FC<Props> = ({ onPlay, shouldSpin }) => {
  const [showSpinning, setShowSpinning] = React.useState(false);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    onPlay(event);
    setShowSpinning(true);
  };

  // Note: the play button should spin if the `spin` api is true (a parent component says the
  // play button should spin) AND should only spin *after* the play button has been clicked.
  return (
    <button className={styles.button} onClick={handleClick} type="button">
      {
        (showSpinning && shouldSpin) && (
          <div className={styles.spinnerContainer}>
            <LottiePlayer
              animationData={animationData}
              autoplay
              loop
              size={53}
            />
          </div>
        )
      }
      <div className={styles.arrowContainer}>
        <div className={styles.arrow} />
      </div>
    </button>
  );
};

export default PlayButton;
