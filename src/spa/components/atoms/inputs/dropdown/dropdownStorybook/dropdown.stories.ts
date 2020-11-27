import createStory from 'storybook/createStory';
import DropdownDemo from './dropdown.demo';

createStory({
  Demo: DropdownDemo,
  demoMargin: true,
  description: 'Our app\'s main dropdown select input.',
  componentName: 'Dropdown',
  summaryPage: false,
  rootDirectory: 'Inputs',
});
