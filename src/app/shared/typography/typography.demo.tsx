import * as React from 'react';
import Typography from './typography';
import * as styles from 'storybook/storybook.module.scss';

const TypographyDemo: React.FC = () => (
  <div className={styles.examplesDivList}>
    <h3 className={styles.h3}>-- Weight --</h3>
    <Typography text="Light Text" weight="light" />
    <Typography text="Regular Text" />
    <Typography text="Bold Text" weight="bold" />
    <div className={styles.exampleBlock} />
  </div>
);

export default TypographyDemo;
