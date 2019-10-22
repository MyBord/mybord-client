import * as React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface Props {
  language?: string;
  value: string;
}

/**
 * This provides a syntax highlighter to user with 'react-markdown' so that we can create
 * in-line code and syntax components in React. See more:
 * https://medium.com/young-developer/react-markdown-code-and-syntax-highlighting-632d2f9b4ada
 */
const CodeBlock: React.FC<Props> = ({ value }) => (
  <SyntaxHighlighter
    language="jsx"
    showLineNumbers
    style={prism}
  >
    {value}
  </SyntaxHighlighter>
);

export default CodeBlock;
