import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import CodeBlock from './codeBlock';
import StorybookHeader from './storybookHeader';
import * as styles from './storybook.module.scss';

interface Props {
  Examples?: React.FC;
  api?: string;
  componentName: string;
  description: string;
  howTo?: string;
  path: string;
}

const SummaryPage: React.FC<Props> = ({
  Examples, api, componentName, description, howTo, path,
}) => (
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
);

export default SummaryPage;
