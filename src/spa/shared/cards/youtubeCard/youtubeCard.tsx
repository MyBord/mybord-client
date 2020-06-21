import * as React from 'react';
import Card from 'cards/card/card';
import { UserCard } from 'schema/card';
import YoutubeCardDescription from './youtubeCardDescription/youtubeCardDescription';
import YoutubeCardThumbnailContainer from './youtubeCardThumbnail/youtubeCardThumbnailContainer';

interface Props {
  userCard: UserCard;
}

const YoutubeCard: React.FC<Props> = ({ userCard }) => {
  const Content: React.FC = () => <YoutubeCardThumbnailContainer userCard={userCard} />;

  const Description: React.FC = () => <YoutubeCardDescription userCard={userCard} />;

  return (
    <Card
      Content={Content}
      Description={Description}
      userCard={userCard}
    />
  );
};

export default YoutubeCard;
