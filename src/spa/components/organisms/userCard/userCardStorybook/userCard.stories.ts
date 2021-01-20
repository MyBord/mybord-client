import createStory from 'storybook/createStory';
import UserCardStory from './userCard.story';

createStory({
  Story: UserCardStory,
  componentName: 'User Card',
  description: 'user cards used for our app.',
  rootDirectory: 'Cards',
});

