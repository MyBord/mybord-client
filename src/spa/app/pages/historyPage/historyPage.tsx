import * as React from 'react';
import LottiePlayer from 'lotty/lottiePlayer';
import historyAnimation from 'lotty/lotties/history.json';
import pageWrapper from 'pages/pageWrapper/pageWrapper';

const HistoryPage: React.FC = () => (
  <LottiePlayer
    animationData={historyAnimation}
    autoplay
    loop
    size={600}
  />
);

export default pageWrapper({ Component: HistoryPage });
