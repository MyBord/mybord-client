export const api = `
| Title    | Description                                                                                        | Required? | Default Value | Type    |
| -------- | -------------------------------------------------------------------------------------------------- | --------- | ------------- | ------- |
| active   | does the button reflect the page that the user is currently on, and thus show the active indicator | -         | false         | boolean |
| iconName | name of icon to be rendered; only certain strings are permitted                                    | ✔         | -             | string  |
| label    | button label                                                                                       | ✔         | -             | string  |
| to       | the page that the button should link to when clicked                                               | ✔         | -             | string  |
`;

export const howTo = `
\`\`\`
import NavigationButton from 'buttons/navigationButton/navigationButton';

<NavigationButton
  iconName="chart"
  label="Trending"
/>
\`\`\`
`;
