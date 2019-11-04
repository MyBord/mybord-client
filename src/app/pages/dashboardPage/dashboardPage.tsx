import * as React from 'react';
import LottiePlayer from 'lotty/lottiePlayer';
import deskAnimation from 'lotty/lotties/desk.json'
import * as styles from './dashboardPage.module.scss';

const DashboardPage: React.FC = () => (
  <section className={styles.section}>
    <LottiePlayer
      animationData={deskAnimation}
      autoplay
      loop
      size={600}
    />
  </section>
);

export default DashboardPage;
