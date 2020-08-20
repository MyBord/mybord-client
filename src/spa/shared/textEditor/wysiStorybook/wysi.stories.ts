import createStory from 'storybook/createStory';
import WysiDemo from './wysi.demo';

createStory({
  Demo: WysiDemo,
  demoMargin: true,
  description: 'Our app\'s wysiwyg editor.',
  componentName: 'Wysi',
  summaryPage: false,
  rootDirectory: 'Wysi',
});
