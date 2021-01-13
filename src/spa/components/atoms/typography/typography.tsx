import * as React from 'react';
import * as styles from './typography.module.less';

interface Props {
  color?: 'black' | 'white';
  hasMargin?: boolean;
  text: string;
  type:
  'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'bodyLarge'
  | 'bodyDefault'
  | 'bodySmall';
}

const Typography: React.FC<Props> = ({
  color = 'black',
  hasMargin = true,
  text,
  type,
}) => (
  <p
    className={[
      styles[color],
      styles[type],
      hasMargin ? styles.hasMargin : styles.noMargin,
    ].join(' ')}
  >
    {text}
  </p>
);

export default Typography;
