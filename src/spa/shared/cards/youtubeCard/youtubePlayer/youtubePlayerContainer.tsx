// Source: https://developers.google.com/youtube/iframe_api_reference

import * as React from 'react';
import usePrevious from 'hooks/usePrevious';
import { YoutubeVideoData } from 'types/youtubeTypes';
import YoutubePlayerComponent from './youtubePlayerComponent';

interface Props {
  showYoutubePlayer: boolean;
  setIsYoutubePlayerLoaded: (isYoutubePlayerLoaded: boolean) => void;
  youtubeVideoData: YoutubeVideoData;
}

const YoutubePlayerContainer: React.FC<Props> = ({
  setIsYoutubePlayerLoaded,
  showYoutubePlayer,
  youtubeVideoData,
}) => {
  const [hasMounted, setHasMounted] = React.useState<boolean>(false);
  const [shouldPauseYoutubeVideo, setShouldPauseYoutubeVideo] = React.useState<boolean>(false);
  const [shouldRenderYoutubePlayer, setShouldRenderYoutubePlayer] = React.useState<boolean>(false);
  const prevShowYoutubePlayer = usePrevious(showYoutubePlayer);

  React.useEffect(() => {
    if (showYoutubePlayer) {
      setHasMounted(true);
      setShouldPauseYoutubeVideo(false);
      setShouldRenderYoutubePlayer(true);
    }
  }, [showYoutubePlayer]);

  React.useEffect(() => {
    if (prevShowYoutubePlayer !== showYoutubePlayer && !showYoutubePlayer && hasMounted) {
      setIsYoutubePlayerLoaded(false);
      setShouldPauseYoutubeVideo(true);
      setTimeout(() => setShouldRenderYoutubePlayer(false), 1000);
    }
  }, [
    hasMounted,
    prevShowYoutubePlayer,
    showYoutubePlayer,
    setIsYoutubePlayerLoaded,
  ]);

  return shouldRenderYoutubePlayer && (
    <YoutubePlayerComponent
      setIsYoutubePlayerLoaded={setIsYoutubePlayerLoaded}
      shouldPauseYoutubeVideo={shouldPauseYoutubeVideo}
      youtubeVideoData={youtubeVideoData}
    />
  );
};

export default YoutubePlayerContainer;
