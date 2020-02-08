import * as React from 'react';
import Typography from 'typography/typography';
import * as styles from './anchor.module.less';

interface Props {
  label: string;
  link?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Anchor: React.FC<Props> = ({ label, link, onClick }) => (
  link ? (
    <a className={styles.a} href={link}>
      <Typography color="blue" text={label} />
    </a>
  ) : (
    <button className={styles.button} onClick={onClick} type="button">
      <Typography color="blue" text={label} />
    </button>
  )
);

export default Anchor;
