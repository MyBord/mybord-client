import createStory from 'storybook/createStory';
import PopOverStory from './popOver.story';

createStory({
  Story: PopOverStory,
  description: 'pop overs used in our app.',
  componentName: 'PopOver',
  rootDirectory: 'Modals',
});
