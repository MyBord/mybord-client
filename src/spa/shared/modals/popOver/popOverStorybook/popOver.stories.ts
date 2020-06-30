import createStory from 'storybook/createStory';
import PopOverDemo from './popOver.demo';

createStory({
  Demo: PopOverDemo,
  demoMargin: true,
  description: 'Our app\'s pop over modal.',
  componentName: 'Pop Over',
  summaryPage: false,
  rootDirectory: 'Modals',
});
