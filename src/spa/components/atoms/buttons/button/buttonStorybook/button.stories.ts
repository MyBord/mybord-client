import createStory from 'storybook/createStory';
import ButtonStory from './button.story';

createStory({
  Story: ButtonStory,
  description: 'The buttons used in our app.',
  componentName: 'Button',
  rootDirectory: 'Buttons',
});
