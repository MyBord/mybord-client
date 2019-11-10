import * as React from 'react';
import * as styles from './typography.module.scss';

interface Props {
  text: string;
  weight?: 'bold' | 'light' | 'regular';
}

const Typography: React.FC<Props> = ({ text, weight = 'regular' }) => (
  <p
    className={[styles.typography, styles[weight]].join(' ')}
  >
    {text}
  </p>
);

export default Typography;
