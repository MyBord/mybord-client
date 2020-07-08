import * as React from 'react';
import LottiePlayer from 'lotty/lottiePlayer';
import inboxAnimation from 'lotty/lotties/inbox.json';
import pageWrapper from 'pages/pageWrapper/pageWrapper';

const InboxPage: React.FC = () => (
  <LottiePlayer
    animationData={inboxAnimation}
    autoplay
    loop
    size={600}
  />
);

export default pageWrapper({ Component: InboxPage });
