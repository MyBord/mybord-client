import * as React from 'react';
import * as styles from './typography.module.scss';

interface Props {
  size?: 'medium' | 'normal' | 'small';
  text: string;
  weight?: 'bold' | 'light' | 'regular';
}

const Typography: React.FC<Props> = ({
  size = 'normal',
  text,
  weight = 'regular',
}) => (
  <p
    className={[styles.typography, styles[size], styles[weight]].join(' ')}
  >
    {text}
  </p>
);

export default Typography;
