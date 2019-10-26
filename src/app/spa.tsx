import * as React from 'react';
import Header from 'header/header';
import HomePage from 'pages/homePage/homePage';
import Navigation from 'navigation/navigation';
import * as styles from './spa.module.scss';
import LottiePlayer from '../thirdParty/lottie/lottiePlayerTwo';

const Spa: React.FC = () => (
  <>
    <Navigation />
    <LottiePlayer />
    <main className={styles.main}>
      <Header />
      <HomePage />
    </main>
  </>
);

export default Spa;
