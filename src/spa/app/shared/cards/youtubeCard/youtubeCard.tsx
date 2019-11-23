import * as React from 'react';
import * as styles from './youtubeCard.module.scss';
import YoutubeCardDescription from './youtubeCardDescription/youtubeCardDescription';
import YoutubeCardThumbnail from './youtubeCardThumbnail/youtubeCardThumbnail';

interface Props {
  resource: object; // ToDo: fix typing
}

// @ts-ignore // ToDo
const YoutubeCard: React.FC<Props> = ({ resource }) => {
  // @ts-ignore // ToDo
  const youtubeData = resource.youtubeVideoData.read();
  return (
    <div className={styles.container}>
      <YoutubeCardThumbnail youtubeData={youtubeData} />
      <YoutubeCardDescription youtubeData={youtubeData} />
    </div>
  );
};

export default YoutubeCard;
