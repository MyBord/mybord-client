import createStory from 'storybook/createStory';
import PopConfirmStory from './popConfirm.story';

createStory({
  Story: PopConfirmStory,
  componentName: 'Pop Confirm',
  description: 'popconfirm used in our app.',
  rootDirectory: 'Modals',
});

