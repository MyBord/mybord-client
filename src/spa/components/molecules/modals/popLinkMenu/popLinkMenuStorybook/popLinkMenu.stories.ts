import createStory from 'storybook/createStory';
import PopLinkMenuStory from './popLinkMenu.story';

createStory({
  Story: PopLinkMenuStory,
  componentName: 'PopLinkMenu',
  description: 'popover menu with various links.',
  rootDirectory: 'Modals',
});

