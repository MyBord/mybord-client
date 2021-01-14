import createStory from 'storybook/createStory';
import PopCheckboxMenuStory from './popCheckboxMenu.story';

createStory({
  Story: PopCheckboxMenuStory,
  componentName: 'PopCheckboxMenu',
  description: 'popover with a checkbox menu.',
  rootDirectory: 'Modals',
});

