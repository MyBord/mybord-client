import createStory from 'storybook/createStory';
import TypographyDemo from './typography.demo';
import TypographyExamples from './typography.examples';
import { api, howTo } from './typography.markup';

createStory({
  Demo: TypographyDemo,
  Examples: TypographyExamples,
  api,
  componentName: 'Typography',
  demoMargin: true,
  description: 'Typography used throughout the app.',
  howTo,
});
