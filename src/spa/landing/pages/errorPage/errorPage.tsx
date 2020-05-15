import * as React from 'react';
import LottiePlayer from 'lotty/lottiePlayer';
import Typography from 'typography/typography';
import constructionAnimation from 'lotty/lotties/construction.json';
import pageWrapper from 'landing/pages/pageWrapper/pageWrapper';
import * as styles from './errorPage.module.less';

const ErrorPage: React.FC = () => (
  <div className={styles.div}>
    <LottiePlayer
      animationData={constructionAnimation}
      autoplay
      loop
      size={300}
    />
    <Typography
      size="four"
      text="Oops ... it looks like something went wrong."
    />
  </div>
);

export default pageWrapper(ErrorPage);
