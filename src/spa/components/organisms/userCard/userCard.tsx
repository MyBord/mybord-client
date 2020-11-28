import * as React from 'react';
const GifCard = React.lazy(() => import('userCard/gifCard/gifCard'));
const ImageCard = React.lazy(() => import('userCard/imageCard/imageCard'));
const YoutubeCard = React.lazy(() => import('userCard/youtubeCard/youtubeCard'));
import { UserCardData } from 'schema/card';

interface Props {
  isPreview?: boolean;
  userCardData: UserCardData;
}

const UserCard: React.FC<Props> = ({ isPreview = false, userCardData }) => {
  switch (userCardData.type) {
    case 'Gif':
      return <GifCard key={userCardData.id} isPreview={isPreview} userCardData={userCardData} />;
    case 'Image':
      return <ImageCard key={userCardData.id} isPreview={isPreview} userCardData={userCardData} />;
    case 'Youtube':
      return (
        <YoutubeCard key={userCardData.id} isPreview={isPreview} userCardData={userCardData} />
      );
    default:
      throw new Error('Invalid user card type.');
  }
};

export default UserCard;
