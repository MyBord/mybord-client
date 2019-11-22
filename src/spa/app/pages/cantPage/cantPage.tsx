import * as React from 'react';
import LottiePlayer from 'lotty/lottiePlayer';
import cantAnimation from 'lotty/lotties/cant.json';

const CantPage: React.FC = () => (
  <LottiePlayer
    animationData={cantAnimation}
    autoplay
    loop
    size={600}
  />
);

export default CantPage;
