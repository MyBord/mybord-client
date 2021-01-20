import * as React from 'react';
import Typography from 'typography/typography';
import * as styles from './tag.module.less';

interface Props {
  color: 'blue'
  | 'pink'
  | 'purple'
  | 'yellow';
  label: string;
}

const Tag: React.FC<Props> = ({ color, label }) => (
  <div
    className={[
      styles.divContainer,
      styles[color],
    ].join(' ')}
  >
    <p className={styles.p}>{label}</p>
  </div>
);

export default Tag;
