import createStory from 'storybook/createStory';
import SearchInputStory from './searchInput.story';

createStory({
  Story: SearchInputStory,
  description: 'The search input used in our app.',
  componentName: 'Search Input',
  rootDirectory: 'Inputs',
});
