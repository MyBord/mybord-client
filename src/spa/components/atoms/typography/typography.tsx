import * as React from 'react';
import * as styles from './typography.module.less';

interface Props {
  color?: 'black' | 'white';
  hasMargin?: boolean;
  size:
  'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'bodyLarge'
  | 'bodyDefault'
  | 'bodySmall';
  text: string;
}

const Typography: React.FC<Props> = ({
  color = 'black',
  hasMargin = true,
  size,
  text,
}) => (
  <p
    className={[
      styles[color],
      styles[size],
      hasMargin ? styles.hasMargin : styles.noMargin,
    ].join(' ')}
  >
    {text}
  </p>
);

export default Typography;
