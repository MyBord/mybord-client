import createStory from 'storybook/createStory';
import NavigationDemo from './navigation.demo';
import { howTo } from './navigation.markup';

createStory({
  Demo: NavigationDemo,
  demoHeader: false,
  description: 'Add icon with possible text to indicate ux behaviour that adds another element.',
  componentName: 'Navigation Menu',
  howTo,
  rootDirectory: 'Navigation',
});
