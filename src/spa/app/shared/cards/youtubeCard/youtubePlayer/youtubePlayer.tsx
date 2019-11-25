import * as React from 'react';
import * as styles from './youtubePlayer.module.scss';

declare global {
  interface Window {
    YT: any;
  }
}

interface Props {
  setIsYoutubePlayerLoaded: (isYoutubePlayerLoaded: boolean) => void;
  videoId: string;
}

const YoutubePlayer: React.FC<Props> = ({ setIsYoutubePlayerLoaded, videoId }) => {
  const foo = (): void => console.log('ready');
  const bar = (): void => console.log('change');
  let player;
  console.log('bark');
  const onYouTubePlayerAPIReady = (): void => {
    player = new window.YT.Player(`youtube-player-${videoId}`, {
      height: '390',
      width: '640',
      videoId,
      events: {
        onReady: foo,
        onStateChange: bar,
      },
    });
  };

  return (
    <div className={styles.div}>
      <iframe
        allowFullScreen
        id={`youtube-player-${videoId}`}
        className={styles.iFrame}
        onLoad={() => setIsYoutubePlayerLoaded(true)}
        src={`https://www.youtube.com/embed/${videoId}?color=white&autoplay=1`}
        title="youtube video"
      />
    </div>
  );
};

export default YoutubePlayer;
