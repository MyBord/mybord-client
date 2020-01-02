import createStory from 'storybook/createStory';
import SpinnerDemo from './spinner.demo';
import { howTo } from './spinner.markup';

createStory({
  Demo: SpinnerDemo,
  Examples: SpinnerDemo,
  componentName: 'Spinner',
  demoMargin: true,
  description: 'Spinner used in our app.',
  howTo,
  rootDirectory: 'Icons',
});
