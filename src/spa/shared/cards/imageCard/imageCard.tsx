import * as React from 'react';
import Card from 'cards/card/card';
import { UserCard } from 'schema/card';
import ImageCardThumbnail from './imageCardThumbnail/imageCardThumbnail';

const userCard: UserCard = {
  id: 'foo-bar-123',
  category: 'Video',
  isFavorite: false,
  isToDo: false,
  title: 'sample title',
  type: 'Youtube',
  cardData: {
    imageCardData: 'foo',
  },
};

const ImageCard: React.FC = () => {
  const Content: React.FC = () => <ImageCardThumbnail />;

  const Description: React.FC = () => <h1>test test</h1>;

  return (
    <Card
      Content={Content}
      Description={Description}
      isPreview={false}
      userCard={userCard}
    />
  );
};

export default ImageCard;
