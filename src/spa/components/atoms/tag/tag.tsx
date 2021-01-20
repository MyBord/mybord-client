import * as React from 'react';
import { TagColors } from 'types/colorTypes';
import * as styles from './tag.module.less';

interface Props {
  className?: string;
  color: TagColors;
  label: string;
}

const Tag: React.FC<Props> = ({
  className = null,
  color,
  label,
}) => (
  <div
    className={[
      styles.divContainer,
      styles[color],
      className || undefined,
    ].join(' ')}
  >
    <p className={styles.p}>{label}</p>
  </div>
);

export default Tag;
