import * as React from 'react';
import LottiePlayer from 'lotty/lottiePlayer';
import favoritesAnimation from 'lotty/lotties/favorites.json';
import pageWrapper from 'pages/pageWrapper/pageWrapper';

const FavoritesPage: React.FC = () => (
  <LottiePlayer
    animationData={favoritesAnimation}
    autoplay
    loop
    size={600}
  />
);

export default pageWrapper(FavoritesPage);
