import * as React from 'react';
import Lottie from 'react-lottie';

interface Props {
  animationData: object;
  isPaused: boolean;
  isStopped: boolean;
  size: number;
}

const LottiePlayer: React.FC<Props> = ({
  animationData, isPaused, isStopped, size,
}) => {
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Lottie
      height={size}
      isPaused={isPaused}
      isStopped={isStopped}
      options={defaultOptions}
      width={size}
    />
  );
};

export default LottiePlayer;
