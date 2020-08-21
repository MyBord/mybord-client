import * as React from 'react';
import Card from 'cards/card/card';
import { UserCard } from 'schema/card';
import YoutubeCardDescription from './youtubeCardDescription/youtubeCardDescription';
import YoutubeCardThumbnail from './youtubeCardThumbnail/youtubeCardThumbnail';

interface Props {
  isPreview?: boolean;
  userCard: UserCard;
}

const YoutubeCard: React.FC<Props> = ({
  isPreview = false,
  userCard,
}) => (
  <Card
    isPreview={isPreview}
    userCard={userCard}
  >
    <YoutubeCardThumbnail
      id={userCard.id}
      youtubeCardData={userCard.cardData.youtubeCardData}
    />
    <YoutubeCardDescription userCard={userCard} />
  </Card>
);

export default YoutubeCard;
