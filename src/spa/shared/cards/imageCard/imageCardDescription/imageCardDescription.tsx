import * as React from 'react';
import { UserCard } from 'schema/card';

interface Props {
  userCard: UserCard;
}

const ImageCardDescription: React.FC<Props> = ({ userCard }) => {
  console.log('&&&&&&&&&');
  console.log(userCard);
  console.log('&&&&&&&&&');

  return (
    <h1>hello world</h1>
  );
};

export default ImageCardDescription;
