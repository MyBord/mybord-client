import createStory from 'storybook/createStory';
import TextInputDemo from './textInput.demo';
import TextInputExamples from './textInput.examples';

createStory({
  Demo: TextInputDemo,
  Examples: TextInputExamples,
  demoMargin: true,
  description: 'Our app\'s text input.',
  componentName: 'Text Input',
  rootDirectory: 'Inputs',
});
