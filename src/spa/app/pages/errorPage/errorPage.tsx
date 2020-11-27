import * as React from 'react';
import LottiePlayer from 'lottiePlayer/lottiePlayer';
import Typography from 'typography/typography';
import constructionAnimation from 'lotties/construction.json';
import pageWrapper from 'pages/pageWrapper/pageWrapper';
import * as styles from './errorPage.module.less';

const ErrorPage: React.FC = () => (
  <div className={styles.div}>
    <LottiePlayer
      animationData={constructionAnimation}
      autoplay
      loop
      size={400}
    />
    <Typography
      size="four"
      text="Oops ... it looks like something went wrong."
    />
  </div>
);

export default pageWrapper({ Component: ErrorPage });
