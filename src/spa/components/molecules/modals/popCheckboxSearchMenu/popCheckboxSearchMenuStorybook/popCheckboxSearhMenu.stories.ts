import createStory from 'storybook/createStory';
import PopCheckboxSearchMenuStory from './popCheckboxSearhMenu.story';

createStory({
  Story: PopCheckboxSearchMenuStory,
  componentName: 'PopCheckboxSearchMenu',
  description: 'popover with a checkbox search menu.',
  rootDirectory: 'Modals',
});

