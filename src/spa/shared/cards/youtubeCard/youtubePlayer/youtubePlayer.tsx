// Source: https://developers.google.com/youtube/iframe_api_reference

import * as React from 'react';
import { YoutubeVideoData } from 'types/youtubeTypes';
import * as styles from './youtubePlayer.module.less';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: Function;
  }
}

interface ContainerProps {
  showYoutubePlayer: boolean;
  setIsYoutubePlayerLoaded: (isYoutubePlayerLoaded: boolean) => void;
  youtubeVideoData: YoutubeVideoData;
}

interface ComponentProps {
  setIsYoutubePlayerLoaded: (isYoutubePlayerLoaded: boolean) => void;
  shouldPauseYoutubeVideo: boolean;
  youtubeVideoData: YoutubeVideoData;
}

const YoutubePlayerComponent: React.FC<ComponentProps> = ({
  setIsYoutubePlayerLoaded,
  shouldPauseYoutubeVideo,
  youtubeVideoData,
}) => {
  const [youtubePlayer, setYoutubePlayer] = React.useState<any>(null);
  const videoFrameId = `youtube-player-${youtubeVideoData.videoId}`;

  React.useEffect(() => {
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
      setYoutubePlayer(player);
    };

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
  }, [
    setIsYoutubePlayerLoaded,
    videoFrameId,
    youtubeVideoData.videoId,
  ]);

  React.useEffect(() => {
    if (shouldPauseYoutubeVideo && youtubePlayer) {
      youtubePlayer.pauseVideo();
    }
  }, [shouldPauseYoutubeVideo, youtubePlayer]);

  return (
    <div>
      <div className={styles.div} id={videoFrameId} />
    </div>
  );
};

const YoutubePlayerContainer: React.FC<ContainerProps> = ({
  setIsYoutubePlayerLoaded,
  showYoutubePlayer,
  youtubeVideoData,
}) => {
  const [shouldPauseYoutubeVideo, setShouldPauseYoutubeVideo] = React.useState<boolean>(false);

  return (
    <>
      <button type="button" onClick={() => setShouldPauseYoutubeVideo(true)}>Pause</button>
      {
        showYoutubePlayer && (
          <YoutubePlayerComponent
            setIsYoutubePlayerLoaded={setIsYoutubePlayerLoaded}
            shouldPauseYoutubeVideo={shouldPauseYoutubeVideo}
            youtubeVideoData={youtubeVideoData}
          />
        )
      }
    </>
  );
};

export default YoutubePlayerContainer;
