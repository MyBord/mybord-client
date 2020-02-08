import createStory from 'storybook/createStory';
import AnchorDemo from './anchor.demo';

createStory({
  Demo: AnchorDemo,
  demoMargin: true,
  description: 'Our app\'s anchor.',
  componentName: 'Anchor',
  summaryPage: false,
  rootDirectory: 'Inputs',
});
