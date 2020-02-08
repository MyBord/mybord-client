import createStory from 'storybook/createStory';
import PlayButtonDemo from './playButton.demo';

createStory({
  Demo: PlayButtonDemo,
  componentName: 'Play Button',
  demoCenter: true,
  demoMargin: true,
  description: 'play button used in youtube video card.',
  rootDirectory: 'Buttons',
  summaryPage: false,
});
