import * as React from 'react';
import * as styles from './typography.module.less';

interface Props {
  size:
  'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'BodyLarge'
  | 'BodyDefault'
  | 'BodySmall';
  text: string;
}

const Typography: React.FC<Props> = ({ size, text }) => (
  <p className={styles[size]}>{text}</p>
);

export default Typography;
