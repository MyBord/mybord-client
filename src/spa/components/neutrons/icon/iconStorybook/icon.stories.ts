import createStory from 'storybook/createStory';
import IconStory from './icon.story';

createStory({
  Story: IconStory,
  description: 'The icons used in our app.',
  componentName: 'Icons',
  rootDirectory: 'Theme',
});
