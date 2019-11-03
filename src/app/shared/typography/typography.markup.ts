export const api = `
| Title | Description                                        | Required? | Default Value | Type   |
| ----- | -------------------------------------------------- | --------- | ------------- | ------ |
| text  | the text that should be rendered                   | ✔         | -             | string |
| type  | the type of text (e.g. h1, h2, standard text, etc) | ✔         | -             | string |
`;

export const howTo = `
\`\`\`
import Typography from 'typography/typography';

<Typography
  text="Hello World"
  type="h1"
/>
\`\`\`
`;
