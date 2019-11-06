import * as React from 'react';
import LottiePlayer from 'lotty/lottiePlayer';
import Spinner from 'icons/spinner/spinnertwo';
import fakeApi from 'api/fakeApi';
import trendingAnimation from 'lotty/lotties/trending.json';
import * as styles from './trendingPage.module.scss';

const TrendingPage: React.FC = () => {
  fakeApi.sampleData.read();
  const [state, useState] = React.useState(false);
  return (
    <section className={styles.section}>
      <button type="button" onClick={() => useState(!state)}>Show</button>
      <Spinner show={state} />
      <LottiePlayer
        animationData={trendingAnimation}
        autoplay
        loop
        size={600}
      />
    </section>
  );
};

export default TrendingPage;
