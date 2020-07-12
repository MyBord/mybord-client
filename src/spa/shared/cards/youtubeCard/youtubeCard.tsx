import * as React from 'react';
import Card from 'cards/card/card';
import { UserCard } from 'schema/card';
import YoutubeCardDescription from './youtubeCardDescription/youtubeCardDescription';
import YoutubeCardThumbnail from './youtubeCardThumbnail/youtubeCardThumbnail';

interface Props {
  userCard: UserCard;
}

const YoutubeCard: React.FC<Props> = ({ userCard }) => {
  const Content: React.FC = () => <YoutubeCardThumbnail userCard={userCard} />;

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
