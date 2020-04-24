import * as React from 'react';
import LottiePlayer from 'lotty/lottiePlayer';
import trendingAnimation from 'lotty/lotties/trending.json';

const TrendingPage: React.FC = () => (
  <LottiePlayer
    animationData={trendingAnimation}
    autoplay
    loop
    size={600}
  />
);

export default TrendingPage;
