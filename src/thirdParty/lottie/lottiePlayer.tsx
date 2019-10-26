import * as React from 'react';
import Lottie from 'react-lottie';
import animationData from './lotties/hamburger.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const LottiePlayer: React.FC = () => (
  <Lottie
    options={defaultOptions}
    height={400}
    width={400}
  />
);

export default LottiePlayer;
