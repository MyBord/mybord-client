import * as React from 'react';
import LottiePlayer from 'lottiePlayer/lottiePlayer';
import Typography from 'typography/typography';
import pageWrapper from 'pages/pageWrapper/pageWrapper';
import trendingAnimation from 'lotties/trending.json';
import * as styles from './trendingPage.module.less';

const TrendingPage: React.FC = () => (
  <div className={styles.div}>
    <Typography
      color="blue"
      size="five"
      text="...under construction"
    />
    <LottiePlayer
      animationData={trendingAnimation}
      autoplay
      loop
      size={600}
    />
  </div>
);

export default pageWrapper({ Component: TrendingPage });
