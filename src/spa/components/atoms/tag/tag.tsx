import * as React from 'react';
import { TagColors } from 'types/colorTypes';
import * as styles from './tag.module.less';

interface Props {
  className?: string;
  color: TagColors;
  ellipsis?: boolean;
  label?: string;
}

const Tag: React.FC<Props> = ({
  className = null,
  color,
  ellipsis = false,
  label,
}) => {
  if (ellipsis) {
    return (
      <div
        className={[
          styles.divContainer,
          styles[color],
          className || undefined,
        ].join(' ')}
      >
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
      </div>
    );
  }

  return (
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
};

export default Tag;
