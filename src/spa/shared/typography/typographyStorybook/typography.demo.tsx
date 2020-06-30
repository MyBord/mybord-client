import * as React from 'react';
import * as styles from 'storybook/storybook.module.less';
import Typography from '../typography';

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
    <Typography text="Normal" />
    <Typography text="Three" size="three" />
    <Typography text="Four" size="four" />
    <Typography text="Five" size="five" />
    <h3 className={styles.h3}>-- Weight --</h3>
    <Typography text="Light Text" weight="light" />
    <Typography text="Regular Text" />
    <Typography text="Bold Text" weight="bold" />
    <div className={styles.exampleBlock} />
  </div>
);

export default TypographyDemo;
