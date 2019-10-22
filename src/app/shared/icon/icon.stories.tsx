import createStory from 'storybook/createStory';
import IconDemo from './icon.demo';
import IconExamples from './icon.examples';
import { api, howTo } from './icon.markup';

createStory({
  Demo: IconDemo,
  Examples: IconExamples,
  demoMargin: true,
  description: 'Icons used in our app.',
  api,
  componentName: 'Icon',
  howTo,
});
