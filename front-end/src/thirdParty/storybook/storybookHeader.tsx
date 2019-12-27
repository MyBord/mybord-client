import * as React from 'react';
import { linkTo } from '@storybook/addon-links';
import * as styles from 'storybook/storybook.module.scss';

interface Props {
  componentName: string;
  description: string;
  path: string;
  summaryPage?: boolean;
}

const StorybookHeader: React.FC<Props> = ({
  componentName, description, path, summaryPage,
}) => (
  <header className={styles.header}>
    <h1 className={styles.h1}>{componentName}</h1>
    {
      summaryPage && (
        <div className={styles.buttonsDiv}>
          <button
            className={styles.link}
            // @ts-ignore - not concerned that `linkTo` is not a mouse event type.
            onClick={linkTo(path, 'Summary')}
            type="button"
          >
            Summary
            <span className={styles.span} />
          </button>
          <button
            className={styles.link}
            // @ts-ignore - not concerned that `linkTo` is not a mouse event type.
            onClick={linkTo(path, 'Demo')}
            type="button"
          >
            Demo
            <span className={styles.span} />
          </button>
        </div>
      )
    }
    <p className={styles.description}>{description}</p>
  </header>
);

export default StorybookHeader;
