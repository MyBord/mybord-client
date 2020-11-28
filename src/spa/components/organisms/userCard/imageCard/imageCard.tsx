import * as React from 'react';
import { UserCardData } from 'schema/card';
import UserCardTemplate from 'userCard/userCardTemplate/userCardTemplate';
import ImageCardContent from './imageCardContent/imageCardContent';
import ImageCardDescription from './imageCardDescription/imageCardDescription';

interface Props {
  isPreview: boolean;
  userCardData: UserCardData;
}

const ImageCard: React.FC<Props> = ({ isPreview, userCardData }) => (
  <UserCardTemplate
    Content={<ImageCardContent userCardData={userCardData} />}
    Description={<ImageCardDescription isPreview={isPreview} userCardData={userCardData} />}
    isPreview={isPreview}
    userCardData={userCardData}
  />
);

export default ImageCard;

