import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import addonStyles from '@sambego/storybook-styles';
import { storiesOf } from '@storybook/react';
import CodeBlock from './codeBlock';
import StorybookHeader from './storybookHeader';
import * as styles from './storybook.module.scss';

interface Props {
  Demo: React.FC;
  Examples?: React.FC;
  api?: string;
  componentName: string;
  demoHeader?: boolean;
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
  demoHeader = true, // if false, remove the header from the demo view.
  demoMargin = false, // if true, the demo component should be rendered with extra margin in the
  // viewport.
  description, // description of component that is to be displayed in header.
  howTo, // howTo markup documentation
  rootDirectory = null, // configures appropriate path / root structure for storybook of there
  // is a parent root directory.
}: Props) => {
  const path = rootDirectory ? `${rootDirectory}/${componentName}` : componentName;
  storiesOf(path, module)
    .addDecorator(addonStyles({
      height: '100vh',
    }))
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
          {/*
            // @ts-ignore */}
          <ReactMarkdown
            className={styles.markdownCode}
            renderers={{ code: CodeBlock }}
            source={howTo}
          />
          {
            api && (
              <>
                <h3 className={styles.h3}>API</h3>
                {/*
                // @ts-ignore */}
                <ReactMarkdown
                  className={styles.markdownTable}
                  renderers={{ code: CodeBlock }}
                  source={api}
                />
              </>
            )
          }
        </article>
        {
          Examples
          && (
          <article>
            <h2 className={styles.h2}>All Examples</h2>
            <div className={styles.examplesDiv}>
              <Examples />
            </div>
          </article>
          )
        }
      </section>
    ))
    .add('Demo', () => (
      <section className={styles.demoSection}>
        {
          demoHeader
          && (
          <StorybookHeader
            componentName={componentName}
            description={description}
            path={path}
          />
          )
        }
        <div
          className={[
            !demoHeader ? styles.demoComponent : undefined,
            demoMargin ? styles.demoMargin : undefined,
          ].join(' ')}
        >
          <Demo />
        </div>
      </section>
    ));
};
