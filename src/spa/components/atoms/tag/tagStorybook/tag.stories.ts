import createStory from 'storybook/createStory';
import TagStory from './tag.story';

createStory({
  Story: TagStory,
  componentName: 'Tag',
  description: 'tags used for our app.',
  rootDirectory: 'Display',
});

