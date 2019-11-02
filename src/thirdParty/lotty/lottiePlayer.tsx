import * as React from 'react';
import Lottie from 'react-lottie';

interface Props {
  animationData: any;
  direction?: number;
  isStopped?: boolean;
  size: number;
}

const LottiePlayer: React.FC<Props> = ({
  animationData, direction = 1, isStopped = false, size,
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
      isPaused={false}
      options={defaultOptions}
      width={size}
    />
  );
};

export default LottiePlayer;
