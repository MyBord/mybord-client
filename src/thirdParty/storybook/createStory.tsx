import * as React from 'react';
import addonStyles from '@sambego/storybook-styles';
import { storiesOf } from '@storybook/react';
import Typography from 'typography/typography';
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
        <section className={styles.section}>
          <header>
            <Typography size="h1" text={componentName} />
            <Typography size="h3" text={description} />
            <hr className={styles.hr} />
          </header>
          <Story />
        </section>
      </React.Suspense>
    ));
};
