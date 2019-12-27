import * as React from 'react';
import LottiePlayer from 'lotty/lottiePlayer';
import followingAnimation from 'lotty/lotties/following.json';

const FollowingPage: React.FC = () => (
  <LottiePlayer
    animationData={followingAnimation}
    autoplay
    loop
    size={600}
  />
);

export default FollowingPage;
