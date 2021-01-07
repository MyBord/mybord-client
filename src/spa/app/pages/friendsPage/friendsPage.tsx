import * as React from 'react';
import LottiePlayer from 'lottiePlayer/lottiePlayer';
import Typography from 'typography/typography';
import followingAnimation from 'lotties/following.json';
import pageWrapper from 'pages/pageWrapper/pageWrapper';
import * as styles from './friendsPage.module.less';

const FriendsPage: React.FC = () => (
  <div className={styles.div}>
    {/* <Typography */}
    {/*  color="blue" */}
    {/*  size="five" */}
    {/*  text="...under construction" */}
    {/* /> */}
    <LottiePlayer
      animationData={followingAnimation}
      autoplay
      loop
      size={600}
    />
  </div>
);

export default pageWrapper({ Component: FriendsPage });
