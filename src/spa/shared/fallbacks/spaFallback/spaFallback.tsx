import * as React from 'react';
import LottiePlayer from 'lotty/lottiePlayer';
import SpaFallbackAnimation from 'framerMotion/spaFallbackAnimation';
import logo from 'assets/logo/logo.png';
import dotLoading from 'lotty/lotties/dotLoading.json';
import * as styles from './spaFallback.module.less';

// This component is used to render a fallback for the entire spa when the spa is loading /
// initializing.
const SpaFallback: React.FC = () => (
  <SpaFallbackAnimation>
    <main className={styles.main}>
      <div className={styles.div}>
        {/* <img alt="MyBord logo" src={logo} /> */}
        <div className={styles.lottieDiv}>
          <LottiePlayer
            animationData={dotLoading}
            autoplay
            loop
            size={100}
            speed={0.8}
          />
        </div>
      </div>
    </main>
  </SpaFallbackAnimation>
);

export default SpaFallback;
