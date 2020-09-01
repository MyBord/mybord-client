import * as React from 'react';
import Card from 'cards/card/card';
import { UserCard } from 'schema/card';

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

const ImageCard: React.FC = () => (
  <Card
    isPreview={false}
    userCard={userCard}
  />
);

export default ImageCard;
