import * as React from 'react';
import createScratchPad from 'storybook/createScratchPad';
import animationData from 'lottie/lotties/hamburger.json';
import useToggle from 'hooks/useToggle';
import LottiePlayer from './lottiePlayer';

const Component: React.FC = () => {
  const [isStopped, toggleStop] = useToggle(true);
  const [isPaused, togglePause] = useToggle();
  const playLottie = (): void => {
    toggleStop();
    setTimeout(() => togglePause(), 1000);
  };

  const unPause = (): void => {
    togglePause();
  };

  return (
    <>
      <LottiePlayer
        animationData={animationData}
        isPaused={isPaused}
        isStopped={isStopped}
        size={400}
      />
      <button type="button" onClick={playLottie}>Click Me</button>
      <button type="button" onClick={unPause}>unPause</button>
    </>
  );
};

createScratchPad(Component, 'Lottie');
