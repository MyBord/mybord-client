import * as React from 'react';
import Lottie from 'react-lottie';

interface Props {
  animationData: object;
  size: number;
}

const LottiePlayer: React.FC<Props> = ({ animationData, size }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Lottie
      options={defaultOptions}
      height={size}
      width={size}
    />
  );
};

export default LottiePlayer;
