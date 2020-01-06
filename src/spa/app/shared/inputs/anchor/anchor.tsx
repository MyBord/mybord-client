import * as React from 'react';
import Typography from 'typography/typography';
import * as styles from './anchor.module.less';

interface Props {
  label: string;
  link: string;
}

const Anchor: React.FC<Props> = ({ label, link }) => (
  <a className={styles.a} href={link}>
    <Typography color="blue" text={label} />
  </a>
);

export default Anchor;
