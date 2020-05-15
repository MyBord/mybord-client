import * as React from 'react';
import LottiePlayer from 'lotty/lottiePlayer';
import followingAnimation from 'lotty/lotties/following.json';
import pageWrapper from 'pages/pageWrapper/pageWrapper';

const FollowingPage: React.FC = () => (
  <LottiePlayer
    animationData={followingAnimation}
    autoplay
    loop
    size={600}
  />
);

export default pageWrapper(FollowingPage);
