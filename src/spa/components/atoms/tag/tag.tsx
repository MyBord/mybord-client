import * as React from 'react';
import { TagColors } from 'types/colorTypes';
import * as styles from './tag.module.less';

interface Props {
  className?: string;
  color: TagColors;
  ellipsis?: boolean;
  label?: string;
}

const Tag = React.forwardRef<HTMLDivElement, Props>((
  {
    className = null,
    color,
    ellipsis = false,
    label,
  },
  ref,
) => {
  if (ellipsis) {
    return (
      <div
        className={[
          styles.divContainer,
          styles[color],
          className || undefined,
        ].join(' ')}
        ref={ref}
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
      ref={ref}
    >
      <p className={styles.p}>{label}</p>
    </div>
  );
});

export default Tag;
