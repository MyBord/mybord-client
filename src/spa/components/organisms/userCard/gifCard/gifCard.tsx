import * as React from 'react';
import { UserCardData } from 'schema/card';
import UserCardTemplate from 'userCard/userCardTemplate/userCardTemplate';
import GifCardContent from './gifCardContent/gifCardContent';
import GifCardDescription from './gifCardDescription/gifCardDescription';

interface Props {
  isPreview: boolean;
  userCardData: UserCardData;
}

const GifCard: React.FC<Props> = ({ isPreview, userCardData }) => (
  <UserCardTemplate
    Content={<GifCardContent userCardData={userCardData} />}
    Description={<GifCardDescription isPreview={isPreview} userCardData={userCardData} />}
    isPreview={isPreview}
    userCardData={userCardData}
  />
);

export default GifCard;

