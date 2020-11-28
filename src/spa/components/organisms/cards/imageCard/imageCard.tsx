import * as React from 'react';
import { UserCard } from 'schema/card';
import CardTemplate from 'cards/cardTemplate/cardTemplate';
import ImageCardContent from './imageCardContent/imageCardContent';
import ImageCardDescription from './imageCardDescription/imageCardDescription';

interface Props {
  isPreview: boolean;
  userCard: UserCard;
}

const ImageCard: React.FC<Props> = ({ isPreview, userCard }) => (
  <CardTemplate
    Content={<ImageCardContent userCard={userCard} />}
    Description={<ImageCardDescription isPreview={isPreview} userCard={userCard} />}
    isPreview={isPreview}
    userCard={userCard}
  />
);

export default ImageCard;

