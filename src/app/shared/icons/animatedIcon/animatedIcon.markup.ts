export const api = `
| Title     | Description                                                     | Required? | Default Value | Type     |
| --------- | --------------------------------------------------------------- | --------- | ------------- | -------- |
| iconName  | name of icon to be rendered; only certain strings are permitted | ✔         | -             | string   |
| isStopped | is the animation stopped or not                                 | ✔         | -             | boolean  |
| size      | size of the icon                                                | ✔         | -             | number   |
`;

export const howTo = `
\`\`\`
import AnimatedIcon from 'icons/animatedIcon/animatedIcon';

<AnimatedIcon
  iconName="chart"
  isStopped={false}
  size={60}
/>
\`\`\`
`;
