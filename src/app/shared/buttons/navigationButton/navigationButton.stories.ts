import createStory from 'storybook/createStory';
import NavigationButtonDemo from './navigationButton.demo';
import NavigationButtonExamples from './navigationButton.examples';
import { api, howTo } from './navigationButton.markup';

createStory({
  Demo: NavigationButtonDemo,
  Examples: NavigationButtonExamples,
  api,
  componentName: 'Navigation Button',
  demoMargin: true,
  description: 'Button used to navigate the app in the left pane navigation',
  howTo,
  rootDirectory: 'Buttons',
});
