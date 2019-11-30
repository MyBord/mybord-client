import * as React from 'react';
import LottiePlayer from 'lotty/lottiePlayer';
import favoritesAnimation from 'lotty/lotties/favorites.json';

const FavoritesPage: React.FC = () => (
  <LottiePlayer
    animationData={favoritesAnimation}
    autoplay
    loop
    size={600}
  />
);

export default FavoritesPage;
