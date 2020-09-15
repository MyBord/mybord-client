import * as React from 'react';
import { UserCard } from 'schema/card';

interface Props {
  userCard: UserCard;
}

const ImageCardDescription: React.FC<Props> = ({ userCard }) => (
  <h1>{userCard.title}</h1>
);

export default ImageCardDescription;
