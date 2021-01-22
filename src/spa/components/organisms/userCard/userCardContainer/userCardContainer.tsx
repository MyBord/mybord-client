import * as React from 'react';
import { UserCardData } from 'schema/card';
const ImageCard = React.lazy(() => import('../imageCard/imageCard'));
const YoutubeCard = React.lazy(() => import('../youtubeCard/youtubeCard'));

interface Props {
  userCardData: UserCardData;
}

const UserCardContainer: React.FC<Props> = ({ userCardData }) => {
  switch (userCardData.type) {
    case 'Image':
      return <ImageCard />;
    case 'Youtube':
      return <YoutubeCard />;
    default:
      throw new Error('Invalid user card type.');
  }
};

export default UserCardContainer;
