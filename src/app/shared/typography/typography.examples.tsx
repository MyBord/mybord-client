import * as React from 'react';
import * as styles from 'storybook/storybook.module.scss';
import Typography from './typography';

const TypographyExamples: React.FC = () => (
  <div className={styles.examplesDivList}>
    <h3 className={styles.h3}>-- Headings --</h3>
    <Typography text="Heading 1" type="h1" />
    <Typography text="Heading 2" type="h2" />
    <h3 className={styles.h3}>-- Text --</h3>
    <Typography text="Regular Text" type="text" />
    <Typography text="Bold Text" type="boldText" />
    <div className={styles.exampleBlock} />
  </div>
);

export default TypographyExamples;
