import createStory from 'storybook/createStory';
import FavoriteButtonDemo from './favoriteButton.demo';

createStory({
  Demo: FavoriteButtonDemo,
  demoMargin: true,
  description: 'Our app\'s favorite button.',
  componentName: 'Favorite Button',
  summaryPage: false,
  rootDirectory: 'Buttons',
});
