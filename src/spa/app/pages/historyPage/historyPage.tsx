import * as React from 'react';
import LottiePlayer from 'lotty/lottiePlayer';
import historyAnimation from 'lotty/lotties/history.json';

const HistoryPage: React.FC = () => (
  <LottiePlayer
    animationData={historyAnimation}
    autoplay
    loop
    size={600}
  />
);

export default HistoryPage;
