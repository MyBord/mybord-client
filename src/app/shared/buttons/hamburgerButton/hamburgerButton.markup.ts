export const api = `
| Title     | Description               | Required? | Default Value | Type     |
| --------- | ------------------------- | --------- | ------------- | -------- |
| direction | props for lottie player   | ✔         | -             | number   |
| isStopped | props for lottie player   | ✔         | -             | boolean  |
| onClick   | function invoked on click | ✔         | -             | function |

`;

export const howTo = `
\`\`\`
import HamburgerButton from 'buttons/hamburgerButton/hamburgerButton';

<HamburgerButton
  direction={1}
  isStopped={false}
  onClick={() => {}}
/>
\`\`\`
`;
