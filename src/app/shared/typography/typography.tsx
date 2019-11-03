import * as React from 'react';
import * as styles from './typography.module.scss';

export const typographyTypes = {
  boldText: 'foo',
  h1: 'foo',
  h2: 'foo',
  text: 'foo',
};

// declaring a typography type from an object instead of an array
// (e.g. ['foo', 'bar'])
// because TS sucks at accessing values in arrays so we can re-use that array in other places.
// https://github.com/microsoft/TypeScript/issues/20965
export type TypographyTypes = keyof typeof typographyTypes;

interface Props {
  text: string;
  type: TypographyTypes;
}

const Typography: React.FC<Props> = ({ text, type }) => {
  switch (type) {
    case 'boldText':
      return <p className={styles.boldText}>{text}</p>;
    case 'h1':
      return <h1 className={styles.h1}>{text}</h1>;
    case 'h2':
      return <h2 className={styles.h2}>{text}</h2>;
    case 'text':
      return <p className={styles.text}>{text}</p>;
    default:
      throw Error('Component: `Typography` - type parameter is invalid.');
  }
};

export default Typography;
