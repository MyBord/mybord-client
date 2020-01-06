import * as React from 'react';
import StorybookHeader from './storybookHeader';
import * as styles from './storybook.module.less';

interface Props {
  Demo: React.FC;
  componentName: string;
  demoCenter?: boolean;
  demoHeader?: boolean;
  demoMargin?: boolean;
  description: string;
  path: string;
  summaryPage?: boolean;
}

const DemoPage: React.FC<Props> = ({
  Demo, componentName, demoCenter, demoHeader, demoMargin, description, path, summaryPage,
}) => (
  <section className={styles.demoSection}>
    {
      demoHeader
      && (
        <StorybookHeader
          componentName={componentName}
          description={description}
          path={path}
          summaryPage={summaryPage}
        />
      )
    }
    <div
      className={[
        demoCenter ? styles.demoCenter : undefined,
        !demoHeader ? styles.demoComponent : undefined,
        demoMargin ? styles.demoMargin : undefined,
      ].join(' ')}
    >
      <Demo />
    </div>
  </section>
);

export default DemoPage;
