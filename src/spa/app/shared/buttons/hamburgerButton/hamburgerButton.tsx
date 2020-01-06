import * as React from 'react';
import LottiePlayer from 'lotty/lottiePlayer';
import animationData from 'lotty/lotties/hamburger.json';
import * as styles from './hamburgerButton.module.less';

interface Props {
  direction: number;
  isStopped: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const HamburgerButton: React.FC<Props> = ({ direction, isStopped, onClick }) => (
  <button
    className={styles.button}
    onClick={onClick}
    type="button"
  >
    <LottiePlayer
      animationData={animationData}
      direction={direction}
      isStopped={isStopped}
      size={50}
      speed={0.6}
    />
  </button>
);

export default HamburgerButton;
