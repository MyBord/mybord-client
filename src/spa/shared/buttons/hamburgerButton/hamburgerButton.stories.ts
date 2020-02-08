import createStory from 'storybook/createStory';
import HamburgerButtonDemo from './hamburgerButton.demo';
import { api, howTo } from './hamburgerButton.markup';

createStory({
  Demo: HamburgerButtonDemo,
  Examples: HamburgerButtonDemo,
  api,
  componentName: 'Hamburger Button',
  demoMargin: true,
  description: 'Hamburger Button used in our navigation.',
  howTo,
  rootDirectory: 'Buttons',
});
