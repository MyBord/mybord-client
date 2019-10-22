import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import { storiesOf } from '@storybook/react';
import CodeBlock from './codeBlock';
import StorybookHeader from './storybookHeader';
import * as styles from './storybook.module.scss';

interface Props {
  Demo: React.FC;
  Examples: React.FC;
  api: string;
  componentName: string;
  demoMargin?: boolean;
  description: string;
  howTo: string;
  rootDirectory?: string;
}

export default ({
  Demo, // React component to be rendered in demo section
  Examples, // React component to be rendered in examples section
  api, // api markup documentation
  componentName, // name of component that is to be displayed in header.
  demoMargin = false, // if true, the demo component should be rendered with extra margin in the
  // viewport.
  description, // description of component that is to be displayed in header.
  howTo, // howTo markup documentation
  rootDirectory = null, // configures appropriate path / root structure for storybook of there
  // is a parent root directory.
}: Props) => {
  const path = rootDirectory ? `${rootDirectory}/${componentName}` : componentName;
  storiesOf(path, module)
    .add('Summary', () => (
      <section>
        <StorybookHeader
          componentName={componentName}
          description={description}
          path={path}
        />
        <article>
          <h2 className={styles.h2}>Description</h2>
          <h3 className={styles.h3}>How To Use</h3>
          <ReactMarkdown
            className={styles.markdownCode}
            renderers={{ code: CodeBlock }}
            source={howTo}
          />
          <h3 className={styles.h3}>API</h3>
          <ReactMarkdown
            className={styles.markdownTable}
            renderers={{ code: CodeBlock }}
            source={api}
          />
        </article>
        <article>
          <h2 className={styles.h2}>All Examples</h2>
          <Examples />
        </article>
      </section>
    ))
    .add('Demo', () => (
      <section>
        <StorybookHeader
          componentName={componentName}
          description={description}
          path={path}
        />
        <div className={demoMargin ? styles.demoComponent : undefined}>
          <Demo />
        </div>
      </section>
    ));
};
