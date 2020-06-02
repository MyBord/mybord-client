import * as React from 'react';
import Typography from 'typography/typography';
import * as styles from './tag.module.less';

interface Props {
  label: string;
}

const Tag: React.FC<Props> = ({ label }) => (
  <div className={styles.div}>
    <Typography
      color="white"
      size="one"
      text={label}
      weight="light"
    />
  </div>
);

export default Tag;
