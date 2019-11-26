import * as React from 'react';
import { YoutubeData } from 'types/youtubeTypes';
import * as styles from './youtubePlayer.module.scss';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: Function;
  }
}

interface Props {
  setIsYoutubePlayerLoaded: (isYoutubePlayerLoaded: boolean) => void;
  youtubeVideoData: YoutubeData;
}

const YoutubePlayer: React.FC<Props> = ({ setIsYoutubePlayerLoaded, youtubeVideoData }) => {
  const videoFrameId = `youtube-player-${youtubeVideoData.videoId}`;

  const onPlayerReady = (event: { [key: string]: any }): void => {
    setIsYoutubePlayerLoaded(true);
    event.target.playVideo();
  };

  const loadVideo = (): void => {
    // the Player object is created uniquely based on the videoId
    const player = new window.YT.Player(videoFrameId, {
      videoId: youtubeVideoData.videoId,
      events: {
        onReady: onPlayerReady,
      },
    });
  };

  React.useEffect(() => {
    // If not, load the script asynchronously
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';

      // onYouTubeIframeAPIReady will load the video after the script is loaded
      window.onYouTubeIframeAPIReady = loadVideo;

      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else { // If script is already there, load the video directly
      loadVideo();
    }
  }, []);

  return (
    <div className={styles.div} id={videoFrameId} />
  );
};

export default YoutubePlayer;
