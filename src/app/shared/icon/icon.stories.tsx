import createStory from 'storybook/createStory';
import IconDemo from './icon.demo';
import { api, howTo } from './icon.markup';

createStory({
  Demo: IconDemo,
  Examples: IconDemo,
  demoMargin: true,
  description: 'Icons used in our app.',
  api,
  componentName: 'Icon',
  howTo,
});
