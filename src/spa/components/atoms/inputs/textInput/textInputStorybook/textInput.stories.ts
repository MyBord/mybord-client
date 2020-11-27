import createStory from 'storybook/createStory';
import TextInputDemo from './textInput.demo';

createStory({
  Demo: TextInputDemo,
  demoMargin: true,
  description: 'Our app\'s text input.',
  componentName: 'Text Input',
  rootDirectory: 'Inputs',
  summaryPage: false,
});
