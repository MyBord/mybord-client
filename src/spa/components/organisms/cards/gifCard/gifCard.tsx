import * as React from 'react';
import { UserCard } from 'schema/card';
import CardTemplate from 'cards/cardTemplate/cardTemplate';
import GifCardContent from './gifCardContent/gifCardContent';
import GifCardDescription from './gifCardDescription/gifCardDescription';

interface Props {
  isPreview: boolean;
  userCard: UserCard;
}

const GifCard: React.FC<Props> = ({ isPreview, userCard }) => (
  <CardTemplate
    Content={<GifCardContent userCard={userCard} />}
    Description={<GifCardDescription isPreview={isPreview} userCard={userCard} />}
    isPreview={isPreview}
    userCard={userCard}
  />
);

export default GifCard;

