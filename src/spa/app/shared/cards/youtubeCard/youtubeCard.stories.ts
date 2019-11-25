import createStory from 'storybook/createStory';
import YoutubeCardDemo from './youtubeCard.demo';

createStory({
  Demo: YoutubeCardDemo,
  componentName: 'Youtube Card',
  demoCenter: true,
  demoMargin: true,
  description: 'Card used to display a youtube video.',
  rootDirectory: 'Cards',
  summaryPage: false,
});
