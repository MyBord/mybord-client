import * as React from 'react';
import LottiePlayer from 'lottiePlayer/lottiePlayer';
import Typography from 'typography/typography';
import cantAnimation from 'lotties/cant.json';
import pageWrapper from 'pages/pageWrapper/pageWrapper';
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
      textAlign="center"
    />
  </div>
);

export default pageWrapper({ Component: CantPage });
