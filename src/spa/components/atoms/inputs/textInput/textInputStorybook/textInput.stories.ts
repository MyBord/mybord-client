import createStory from 'storybook/createStory';
import TextInputStory from './textInput.story';

createStory({
  Story: TextInputStory,
  componentName: 'TextInput',
  description: 'text inputs used for our app.',
  rootDirectory: 'Inputs',
});

