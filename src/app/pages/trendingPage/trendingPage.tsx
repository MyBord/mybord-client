import * as React from 'react';
import LottiePlayer from 'lotty/lottiePlayer';
import trendingAnimation from 'lotty/lotties/trending.json'
import * as styles from './trendingPage.module.scss';

const TrendingPage: React.FC = () => (
  <section className={styles.section}>
    <LottiePlayer
      animationData={trendingAnimation}
      autoplay
      loop
      size={600}
    />
  </section>
);

export default TrendingPage;
