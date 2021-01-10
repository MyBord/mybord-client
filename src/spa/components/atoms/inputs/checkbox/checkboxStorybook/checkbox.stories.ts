import createStory from 'storybook/createStory';
import CheckboxStory from './checkbox.story';

createStory({
  Story: CheckboxStory,
  componentName: 'Checkbox',
  description: 'checkboxes used for our app.',
  rootDirectory: 'Inputs',
});

