import * as React from 'react';
import Lottie from 'react-lottie';

interface Props {
  animationData: any;
  direction?: number;
  isPaused?: boolean;
  isStopped?: boolean;
  size: number;
  speed?: number;
}

const LottiePlayer: React.FC<Props> = ({
  animationData, direction = 1, isPaused = false, isStopped = false, size, speed = undefined,
}) => {
  const defaultOptions = {
    animationData,
    autoplay: false,
    loop: false,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Lottie
      direction={direction}
      height={size}
      isPaused={isPaused}
      isStopped={isStopped}
      options={defaultOptions}
      width={size}
      speed={speed}
    />
  );
};

export default LottiePlayer;
