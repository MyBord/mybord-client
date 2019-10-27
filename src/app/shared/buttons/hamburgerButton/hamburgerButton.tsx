import * as React from 'react';
import LottiePlayer from 'lottie/lottiePlayer';
import animationData from 'lottie/lotties/hamburger.json';
import useToggle from 'hooks/useToggle';

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const HamburgerButton: React.FC<Props> = ({ onClick }) => {
  const [isStopped, toggleStop] = useToggle(true);
  const [isPaused, togglePause] = useToggle();
  const playLottie = (): void => {
    toggleStop();
    setTimeout(() => togglePause(), 1000);
  };

  const unPause = (): void => {
    togglePause();
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    onClick(event);
  };

  return (
    <>
      <button
        onClick={handleClick}
        type="button"
      >
        Hamburger
      </button>
      <button type="button" onClick={playLottie}>Click Me</button>
      <button type="button" onClick={unPause}>unPause</button>
      <LottiePlayer
        animationData={animationData}
        size={200}
        isPaused={isPaused}
        isStopped={isStopped}
      />
    </>
  );
};

export default HamburgerButton;
