import * as React from 'react';
import LottiePlayer from 'lotty/lottiePlayer';
import spinnerAnimation from 'lotty/lotties/spinner.json';
import * as styles from './spinner.module.less';

const Spinner: React.FC = () => (
  <div className={styles.div}>
    <LottiePlayer
      animationData={spinnerAnimation}
      autoplay
      loop
      size={400}
    />
  </div>
);

export default Spinner;
