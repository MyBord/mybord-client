import * as React from 'react';
import Lottie from 'react-lottie';

interface Props {
  animationData: any;
  direction?: number;
  isPaused?: boolean;
  isStopped?: boolean;
  size: number;
}

const LottiePlayer: React.FC<Props> = ({
  animationData, direction = 1, isPaused = false, isStopped = false, size,
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
      isStopped={isStopped}
      isPaused={isPaused}
      options={defaultOptions}
      width={size}
    />
  );
};

export default LottiePlayer;
