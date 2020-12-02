import * as React from 'react';
import { UserCardData } from 'schema/card';
import CardMenuButton from 'buttons/cardMenuButton/cardMenuButton';
import UserCardMenuContent from './userCardMenuContent/userCardMenuContent';

interface Props {
  userCardData: UserCardData;
}

const UserCardMenu: React.FC<Props> = ({ userCardData }) => (
  <CardMenuButton Content={<UserCardMenuContent cardId={userCardData.id} />} />
);

export default UserCardMenu;
