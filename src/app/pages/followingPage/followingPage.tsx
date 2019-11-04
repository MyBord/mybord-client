import * as React from 'react';
import LottiePlayer from 'lotty/lottiePlayer';
import followingAnimation from 'lotty/lotties/following.json'
import * as styles from './followingPage.module.scss';

const FollowingPage: React.FC = () => (
  <section className={styles.section}>
    <LottiePlayer
      animationData={followingAnimation}
      autoplay
      loop
      size={600}
    />
  </section>
);

export default FollowingPage;
