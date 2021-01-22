import * as React from 'react';
import Typography from 'typography/typography';
import userCardMockData from 'mockData/userCardMockData';
import UserCard from '../userCard';

const UserCardStory: React.FC = () => (
  <>
    <Typography text="Default User Card" type="h1" />
    <Typography text="Standard User Card" type="h3" />
    <UserCard userCardData={userCardMockData.defaultData} />
    <Typography text="User Card Tags" type="h1" />
    <Typography text="w/ no tags" type="h3" />
    <UserCard userCardData={userCardMockData.noTags} />
    <Typography text="w/ some tags" type="h3" />
    <UserCard userCardData={userCardMockData.someTags} />
    <Typography text="w/ lots of tags" type="h3" />
    <UserCard userCardData={userCardMockData.defaultData} />
    <Typography text="Card Status" type="h1" />
    <Typography text="neither" type="h3" />
    <UserCard userCardData={userCardMockData.defaultData} />
    <Typography text="is Favorite" type="h3" />
    <UserCard userCardData={userCardMockData.isFavorite} />
    <Typography text="is To Do" type="h3" />
    <UserCard userCardData={userCardMockData.isToDo} />
  </>
);

export default UserCardStory;
