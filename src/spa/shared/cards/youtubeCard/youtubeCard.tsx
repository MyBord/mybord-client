import * as React from 'react';
import Card from 'cards/card';
import { YoutubeVideoData } from 'types/youtubeTypes';
import YoutubeCardDescription from './youtubeCardDescription/youtubeCardDescription';
import YoutubeCardThumbnailContainer from './youtubeCardThumbnail/youtubeCardThumbnailContainer';

interface Props {
  id: string;
  youtubeVideoData: YoutubeVideoData;
}

const YoutubeCard: React.FC<Props> = ({ id, youtubeVideoData }) => (
  <Card id={id}>
    <YoutubeCardThumbnailContainer youtubeVideoData={youtubeVideoData} />
    <YoutubeCardDescription youtubeVideoData={youtubeVideoData} />
  </Card>
);

export default YoutubeCard;
