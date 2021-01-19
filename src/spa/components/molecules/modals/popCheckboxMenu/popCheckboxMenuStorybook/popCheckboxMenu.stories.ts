import createStory from 'storybook/createStory';
import PopCheckboxMenuStory from './popCheckboxMenu.story';

createStory({
  Story: PopCheckboxMenuStory,
  componentName: 'Pop Checkbox Menu',
  description: 'popover with a checkbox menu.',
  rootDirectory: 'Modals',
});

