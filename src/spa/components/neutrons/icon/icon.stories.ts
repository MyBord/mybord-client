import createStory from 'storybook/createStory';
import IconDemo from './icon.demo';

createStory({
  Demo: IconDemo,
  componentName: 'Icon',
  demoMargin: true,
  description: 'All icons that are used in our app.',
  summaryPage: false,
  rootDirectory: 'Icons',
});
