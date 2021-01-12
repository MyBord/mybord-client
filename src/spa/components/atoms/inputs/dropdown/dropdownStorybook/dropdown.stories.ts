import createStory from 'storybook/createStory';
import DropdownStory from './dropdown.story';

createStory({
  Story: DropdownStory,
  componentName: 'Dropdown',
  description: 'dropdowns used in our app.',
  rootDirectory: 'Inputs',
});

