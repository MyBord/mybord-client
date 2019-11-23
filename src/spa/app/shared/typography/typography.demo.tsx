import * as React from 'react';
import Typography from './typography';
import * as styles from 'storybook/storybook.module.scss';

const TypographyDemo: React.FC = () => (
  <div className={styles.examplesDivList}>
    <h3 className={styles.h3}>-- Colors --</h3>
    <Typography color="black" text="Black" />
    <Typography color="white" text="White" />
    <Typography color="transparentWhite" text="Transparent White" />
    <h3 className={styles.h3}>-- Fonts --</h3>
    <Typography text="Poppins" />
    <Typography font="roboto" text="Roboto" />
    <h3 className={styles.h3}>-- Sizes --</h3>
    <Typography text="Small" size="small" />
    <Typography text="Medium" size="medium" />
    <Typography text="Normal" />
    <Typography text="Large" size="large" />
    <h3 className={styles.h3}>-- Weight --</h3>
    <Typography text="Light Text" weight="light" />
    <Typography text="Regular Text" />
    <Typography text="Bold Text" weight="bold" />
    <div className={styles.exampleBlock} />
  </div>
);

export default TypographyDemo;
