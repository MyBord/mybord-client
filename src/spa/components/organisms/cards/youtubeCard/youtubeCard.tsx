import * as React from 'react';
import { UserCard } from 'schema/card';
import CardTemplate from 'cards/cardTemplate/cardTemplate';
import YoutubeCardContent from './youtubeCardContent/youtubeCardContent';
import YoutubeCardDescription from './youtubeCardDescription/youtubeCardDescription';

interface Props {
  isPreview: boolean;
  userCard: UserCard;
}

const YoutubeCard: React.FC<Props> = ({ isPreview, userCard }) => (
  <CardTemplate
    Content={<YoutubeCardContent userCard={userCard} />}
    Description={<YoutubeCardDescription userCard={userCard} />}
    isPreview={isPreview}
    userCard={userCard}
  />
);

export default YoutubeCard;

