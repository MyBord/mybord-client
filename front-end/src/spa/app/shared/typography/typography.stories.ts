import createStory from 'storybook/createStory';
import TypographyDemo from './typography.demo';

createStory({
  Demo: TypographyDemo,
  componentName: 'Typography',
  demoMargin: true,
  description: 'Typography used throughout the app.',
  rootDirectory: 'Theme',
  summaryPage: false,
});
