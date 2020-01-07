import createStory from 'storybook/createStory';
import ButtonDemo from './button.demo';

createStory({
  Demo: ButtonDemo,
  demoMargin: true,
  description: 'Our app\'s main button.',
  componentName: 'Button',
  summaryPage: false,
  rootDirectory: 'Buttons',
});
