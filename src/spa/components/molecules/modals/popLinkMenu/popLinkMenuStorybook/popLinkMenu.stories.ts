import createStory from 'storybook/createStory';
import PopLinkMenuStory from './popLinkMenu.story';

createStory({
  Story: PopLinkMenuStory,
  componentName: 'Pop Link Menu',
  description: 'popover menu with various links.',
  rootDirectory: 'Modals',
});

