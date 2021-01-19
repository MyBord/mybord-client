import createStory from 'storybook/createStory';
import PopCheckboxSearchMenuStory from './popCheckboxSearhMenu.story';

createStory({
  Story: PopCheckboxSearchMenuStory,
  componentName: 'Pop Checkbox Search Menu',
  description: 'popover with a checkbox search menu.',
  rootDirectory: 'Modals',
});

