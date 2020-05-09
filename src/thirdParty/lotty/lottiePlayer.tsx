import * as React from 'react';
import Lottie from './lottie';

interface Props {
  animationData: any;
  autoplay?: boolean;
  direction?: number;
  isPaused?: boolean;
  isStopped?: boolean;
  loop?: boolean;
  size: number;
  speed?: number;
}

const LottiePlayer: React.FC<Props> = ({
  animationData,
  autoplay = false,
  direction = 1,
  isPaused = false,
  isStopped = false,
  loop = false,
  size,
  speed = undefined,
}) => {
  const defaultOptions = {
    animationData,
    autoplay,
    loop,
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
