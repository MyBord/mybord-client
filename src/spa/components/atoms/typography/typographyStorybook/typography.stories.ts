import createStory from 'storybook/createStory';
import TypographyStory from './typography.story';

createStory({
  Story: TypographyStory,
  componentName: 'Typography',
  description: 'typography used for titles and body text.',
  rootDirectory: 'Theme',
});
