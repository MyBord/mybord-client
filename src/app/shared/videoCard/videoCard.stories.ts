import createStory from 'storybook/createStory';
import VideoCardDemo from './videoCard.demo';

createStory({
  Demo: VideoCardDemo,
  componentName: 'Video Card',
  demoMargin: true,
  description: 'Card used to display a youtube video.',
  rootDirectory: 'Cards',
  summaryPage: false,
});
