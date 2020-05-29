import createStory from 'storybook/createStory';
import LikeButtonDemo from './likeButton.demo';

createStory({
  Demo: LikeButtonDemo,
  demoMargin: true,
  description: 'Our app\'s like button.',
  componentName: 'Like Button',
  summaryPage: false,
  rootDirectory: 'Buttons',
});
