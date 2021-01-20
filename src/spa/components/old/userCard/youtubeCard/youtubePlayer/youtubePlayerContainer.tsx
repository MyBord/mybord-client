// Source: https://developers.google.com/youtube/iframe_api_reference

import * as React from 'react';
import usePrevious from 'hooks/usePrevious';
import { YoutubeVideoData } from 'types/youtubeTypes';
import YoutubePlayerComponent from './youtubePlayerComponent';

export interface Props {
  showYoutubePlayer: boolean;
  setIsYoutubePlayerLoaded: (isYoutubePlayerLoaded: boolean) => void;
  youtubeVideoData: YoutubeVideoData;
}

// The goal of this container is that, when the video is no longer to be played, instead of
// immediately unmounting the youtube video, we instead pause the video and then unmount the
// video after a certain period of time. This allows us to have the thumbnail reappear with
// an elegant opacity transition over the youtube player while the youtube player is still rendered.

const YoutubePlayerContainer: React.FC<Props> = ({
  setIsYoutubePlayerLoaded,
  showYoutubePlayer,
  youtubeVideoData,
}) => {
  // `hasMounted` refers to if the component has mounted *the first time*. We need to know this
  // so that we don't invoke 'Condition 1' and thus try and pause a video that hasn't been
  // played yet. Otherwise, if this primitive wouldn't exit, then every youtube player would try
  // to be paused when it is first played (because
  // `prevShowYoutubePlayer !== showYoutubePlayer && !showYoutubePlayer` would equate to true
  // when the youtube player is first played.
  const [hasMounted, setHasMounted] = React.useState<boolean>(false);

  // `shouldPauseYoutubeVideo` refers to if the youtube player should be paused. The youtube
  // player should be paused when we need to unmount it.
  const [shouldPauseYoutubeVideo, setShouldPauseYoutubeVideo] = React.useState<boolean>(false);

  // `shouldRenderYoutubePlayer` is the actual final primitive that declares if the youtube
  // player is rendered. It is first set to true in 'Condition 1' when a user tries to play the
  // video, but then the youtube player has its unmounting / unrendering delayed.
  const [shouldRenderYoutubePlayer, setShouldRenderYoutubePlayer] = React.useState<boolean>(false);

  const prevShowYoutubePlayer = usePrevious(showYoutubePlayer);

  React.useEffect(() => {
    // Condition 1
    if (showYoutubePlayer) {
      setHasMounted(true);

      // set pause to 'false' in case we need to play the video for a second time.
      setShouldPauseYoutubeVideo(false);

      setShouldRenderYoutubePlayer(true);
    }
  }, [showYoutubePlayer]);

  React.useEffect(() => {
    // Condition 2
    // If the youtube player is currently playing and is being told to stop playing / being
    // shown, then pause the video and don't unmount it until the same amount of time that our
    // transition occurs for our youtube thumbnail, as found in `youtubeThumbnailAnimation.tsx`
    if (prevShowYoutubePlayer !== showYoutubePlayer && !showYoutubePlayer && hasMounted) {
      // reset the `isYoutubePlayerLoaded` primitive in case we want to play the same video a
      // second time, this way our thumbnail can find out when the player has been re-instantiated.
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
