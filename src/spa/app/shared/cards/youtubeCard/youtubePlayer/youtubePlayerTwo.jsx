/* eslint-disable */
import React from 'react';

class YouTubeVideo extends React.PureComponent {
  componentDidMount() {
    if (!window.YT) { // If not, load the script asynchronously
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';

      // onYouTubeIframeAPIReady will load the video after the script is loaded
      window.onYouTubeIframeAPIReady = this.loadVideo;

      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else { // If script is already there, load the video directly
      this.loadVideo();
    }
  };

  loadVideo() {
    const { videoId } = this.props;

    // the Player object is created uniquely based on the id in props
    this.player = new window.YT.Player(`youtube-player-${videoId}`, {
      videoId,
      events: {
        onReady: this.onPlayerReady,
      },
    });
  };

  onPlayerReady(event) {
    console.log('playing *************');
    event.target.playVideo();
  };

  render() {
    const { videoId } = this.props;
    return (
      <div>
        <div id={`youtube-player-${videoId}`} />
      </div>
    );
  };
}

export default YouTubeVideo;
