import * as React from 'react';
import LottiePlayer from 'lotty/lottiePlayer';
import fakeApi from 'api/fakeApi';
import followingAnimation from 'lotty/lotties/following.json';

const FollowingPage: React.FC = () => {
  fakeApi.sampleData.read();
  return (
    <LottiePlayer
      animationData={followingAnimation}
      autoplay
      loop
      size={600}
    />
  );
};

export default FollowingPage;
