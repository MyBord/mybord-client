import createStory from 'storybook/createStory';
import CheckboxDemo from './checkbox.demo';

createStory({
  Demo: CheckboxDemo,
  demoMargin: true,
  description: 'Our app\'s checkbox.',
  componentName: 'Checkbox',
  summaryPage: false,
  rootDirectory: 'Inputs',
});
