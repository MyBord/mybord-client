import * as React from 'react';
import LottiePlayer from 'lotty/lottiePlayer';
import Typography from 'typography/typography';
import cantAnimation from 'lotty/lotties/cant.json';
import * as styles from './cantPage.module.less';

const CantPage: React.FC = () => (
  <div className={styles.div}>
    <LottiePlayer
      animationData={cantAnimation}
      autoplay
      loop
      size={600}
    />
    <Typography
      size="four"
      text="Sorry, page not found."
    />
  </div>
);

export default CantPage;
