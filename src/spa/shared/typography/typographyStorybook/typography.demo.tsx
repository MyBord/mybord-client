import * as React from 'react';
import * as styles from 'storybook/storybook.module.less';
import Typography from '../typography';

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

const TypographyDemo: React.FC = () => (
  <div className={styles.examplesDivList}>
    <h3 className={styles.h3}>-- Colors --</h3>
    <Typography color="black" text="Black" />
    <Typography color="lightGrey" text="Light Grey" />
    <Typography color="white" text="White" />
    <Typography color="transparentWhite" text="Transparent White" />
    <Typography color="blue" text="Blue" />
    <h3 className={styles.h3}>-- Fonts --</h3>
    <Typography text="Poppins" />
    <Typography font="roboto" text="Roboto" />
    <h3 className={styles.h3}>-- Sizes --</h3>
    <Typography text="One" size="one" />
    <Typography text="Two" size="two" />
    <Typography text="Normal" size="normal" />
    <Typography text="Three" size="three" />
    <Typography text="Four" size="four" />
    <Typography text="Five" size="five" />
    <h3 className={styles.h3}>-- Weight --</h3>
    <Typography text="Light Text" weight="light" />
    <Typography text="Regular Text" />
    <Typography text="Bold Text" weight="bold" />
    <h3 className={styles.h3}>-- Ellipsis --</h3>
    <Typography maxTextLength={60} text={`Size: One, ${loremIpsum}`} size="one" />
    <Typography maxTextLength={60} text={`Size: Two, ${loremIpsum}`} size="two" />
    <Typography maxTextLength={60} text={`Size: Normal, ${loremIpsum}`} size="normal" />
    <Typography maxTextLength={60} text={`Size: Three, ${loremIpsum}`} size="three" />
    <Typography maxTextLength={60} text={`Size: Four, ${loremIpsum}`} size="four" />
    <Typography maxTextLength={60} text={`Size: Five, ${loremIpsum}`} size="five" />
    <div className={styles.exampleBlock} />
  </div>
);

export default TypographyDemo;
