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

const Content: React.FC = () => <ImageCardThumbnail />;

const Description: React.FC = () => <h3>hello world</h3>;

const ImageCard: React.FC = () => (
  <Card
    Content={Content}
    Description={Description}
    isPreview={false}
    userCard={userCard}
  />
);

export default ImageCard;
