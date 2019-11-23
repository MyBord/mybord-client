import * as React from 'react';
import LottiePlayer from 'lotty/lottiePlayer';
import Typography from 'typography/typography';
import constructionAnimation from 'lotty/lotties/construction.json';
import * as styles from './errorPage.module.scss';

const ErrorPage: React.FC = () => (
  <div className={styles.div}>
    <LottiePlayer
      animationData={constructionAnimation}
      autoplay
      loop
      size={400}
    />
    <Typography
      size="large"
      text="Oops ... it looks like something went wrong."
    />
  </div>
);

export default ErrorPage;
