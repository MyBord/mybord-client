import * as React from 'react';
import Typography from 'typography/typography';
import { defaultUserCardMockData } from 'mockData/userCardMockData';
import UserCard from '../userCard';

const UserCardStory: React.FC = () => (
  <>
    <Typography text="Default User Card" type="h1" />
    <UserCard userCardData={defaultUserCardMockData} />
  </>
);

export default UserCardStory;
