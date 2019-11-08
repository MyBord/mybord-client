import * as React from 'react';
import * as styles from './video.module.scss';

const getYouTubeId = (url: string): string => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  if (match && match[2].length === 11) {
    return `https://www.youtube.com/embed/${match[2]}?color=white`;
  }
  return 'error';
};

interface Props {
  link: string;
}

const VideoDisplay: React.FC<Props> = ({ link }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  return (
    <div className={styles.div}>
      {isLoaded ? 'Loaded' : 'Loading'}
      <iframe
        allowFullScreen
        className={styles.iFrame}
        onLoad={() => setIsLoaded(true)}
        src={getYouTubeId(link)}
        title="youtube video"
      />
    </div>
  );
};

export default VideoDisplay;
