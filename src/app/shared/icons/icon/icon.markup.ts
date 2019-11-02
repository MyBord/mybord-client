export const api = `
| Title    | Description                                                     | Required? | Default Value | Type     |
| -------- | --------------------------------------------------------------- | --------- | ------------- | -------- |
| iconName | name of icon to be rendered; only certain strings are permitted | ✔         | -             | string   |
| size     | size of the icon                                                | ✔         | -             | number   |
`;

export const howTo = `
\`\`\`
import Icon from 'icons/icon/icon';

<Icon
  iconName="email"
  size={60}
/>
\`\`\`
`;
