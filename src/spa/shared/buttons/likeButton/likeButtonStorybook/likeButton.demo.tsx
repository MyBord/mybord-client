import * as React from 'react';
import LikeButton from '../likeButton';

const LikeButtonDemo: React.FC = () => {
  const [isLiked, setIsLiked] = React.useState<boolean>(false);

  return (
    <LikeButton
      isLiked={isLiked}
      onClick={() => setIsLiked((prevState) => !prevState)}
      size={100}
    />
  );
};

export default LikeButtonDemo;
