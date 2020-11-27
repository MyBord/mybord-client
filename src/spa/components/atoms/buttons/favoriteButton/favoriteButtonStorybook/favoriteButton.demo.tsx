import * as React from 'react';
import FavoriteButton from '../favoriteButton';

const FavoriteButtonDemo: React.FC = () => {
  const [isFavorite, setIsFavorite] = React.useState<boolean>(false);

  return (
    <FavoriteButton
      isFavorite={isFavorite}
      onClick={() => setIsFavorite((prevState) => !prevState)}
      size={100}
    />
  );
};

export default FavoriteButtonDemo;
