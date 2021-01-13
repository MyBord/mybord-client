import * as React from 'react';
import Typography from 'typography/typography';
import * as styles from './storybook.module.less';

export const PopOverBox = React.forwardRef<HTMLDivElement, {}>(({}, ref) => (
  <div className={styles.popOverBoxContainer}>
    <div ref={ref} className={styles.popOverBox}>
      <Typography color="white" type="bodyDefault" text="Click Me" />
    </div>
  </div>
));


