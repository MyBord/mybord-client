import * as React from 'react';
import addonStyles from '@sambego/storybook-styles';
import { storiesOf } from '@storybook/react';
import * as styles from './storybook.module.less';

interface Props {
  Story: React.FC;
  componentName: string;
  description: string;
  rootDirectory: string;
}

export default ({
  Story,
  componentName,
  description,
  rootDirectory,
}: Props): void => {
  storiesOf(rootDirectory, module)
    .addDecorator(addonStyles({
      height: '100vh',
    }))
    .add(componentName, () => (
      <React.Suspense fallback={<div>Loading...</div>}>
        <section>
          <header className={styles.header}>
            <h1 className={styles.h1}>{componentName}</h1>
            <p className={styles.description}>{description}</p>
          </header>
          <Story />
        </section>
      </React.Suspense>
    ));
};
