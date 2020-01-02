import createStory from 'storybook/createStory';
import AnimatedIconDemo from './animatedIcon.demo';
import AnimatedIconExamples from './animatedIcon.examples';
import { api, howTo } from './animatedIcon.markup';

createStory({
  Demo: AnimatedIconDemo,
  Examples: AnimatedIconExamples,
  api,
  componentName: 'Animated Icon',
  demoMargin: true,
  description: 'All animated icons that are used in our app.',
  howTo,
  rootDirectory: 'Icons',
});
