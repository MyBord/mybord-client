import * as React from 'react';
import useMount from 'hooks/useMount';
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
  const videoFrameId = `youtube-player-${videoId}`;
  const readyFn = (): void => console.log('this is ready');
  const onYouTubeIframeAPIReady = (): void => {
    const player = new window.YT.Player(videoFrameId, {
      videoId,
      events: {
        onReady: readyFn,
      },
    });
    console.log('Video API is loaded');
  };

  const mountIframeApiReady = (): void => {
    // @ts-ignore
    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady();
  };
  useMount(mountIframeApiReady);

  return (
    <div className={styles.div}>
      // @ts-ignore;
      <button type="button" onClick={() => window.bark()}>click me</button>
      <iframe
        allowFullScreen
        id={videoFrameId}
        className={styles.iFrame}
        onLoad={() => setIsYoutubePlayerLoaded(true)}
        src={`https://www.youtube.com/embed/${videoId}?color=white&autoplay=1`}
        title="youtube video"
      />
    </div>
  );
};

export default YoutubePlayer;
