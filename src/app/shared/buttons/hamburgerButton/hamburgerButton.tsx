import * as React from 'react';
import LottiePlayer from 'lotty/lottiePlayer';
import animationData from 'lotty/lotties/hamburger.json';
import * as styles from './hamburgerButton.module.scss';

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const HamburgerButton: React.FC<Props> = ({ onClick }) => {
  const [isStopped, setStop] = React.useState(true);
  const [direction, setDirection] = React.useState(1);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    onClick(event);
    if (!isStopped) {
      setDirection(direction * -1);
    }
    setStop(false);
  };

  return (
    <button
      className={styles.button}
      onClick={handleClick}
      type="button"
    >
      <LottiePlayer
        animationData={animationData}
        direction={direction}
        isStopped={isStopped}
        size={50}
      />
    </button>
  );
};

export default HamburgerButton;
