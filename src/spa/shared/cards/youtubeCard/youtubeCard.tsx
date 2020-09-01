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
}) => {
  const Content: React.FC = () => (
    <YoutubeCardThumbnail
      id={userCard.id}
      youtubeCardData={userCard.cardData.youtubeCardData}
    />
  );

  const Description: React.FC = () => <YoutubeCardDescription userCard={userCard} />;

  return (
    <Card
      Content={Content}
      Description={Description}
      isPreview={isPreview}
      userCard={userCard}
    />
  );
};

export default YoutubeCard;
