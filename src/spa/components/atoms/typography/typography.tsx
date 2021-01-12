import * as React from 'react';
import * as styles from './typography.module.less';

interface Props {
  color?: 'black' | 'white';
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
  size,
  text,
}) => (
  <p
    className={[
      styles[color],
      styles[size],
    ].join(' ')}
  >
    {text}
  </p>
);

export default Typography;
