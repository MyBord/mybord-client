import * as React from 'react';
import LottiePlayer from 'lotty/lottiePlayer';
import fakeApi from 'api/fakeApi';
import trendingAnimation from 'lotty/lotties/trending.json';

const TrendingPage: React.FC = () => {
  fakeApi.sampleData.read();
  return (
    <LottiePlayer
      animationData={trendingAnimation}
      autoplay
      loop
      size={600}
    />
  );
};

export default TrendingPage;
