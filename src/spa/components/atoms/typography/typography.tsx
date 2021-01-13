import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './typography.module.less';

interface Props {
  color?: 'black' | 'white';
  hasMargin?: boolean;
  link?: string;
  text: string;
  type:
  'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'bodyLarge'
  | 'bodyDefault'
  | 'bodySmall'
  | 'linkDefault';
}

const Typography: React.FC<Props> = ({
  color = 'black',
  hasMargin = true,
  link = null,
  text,
  type,
}) => {
  if (link && type === 'linkDefault') {
    return (
      <Link className={styles[type]} to={link}>
        {text}
      </Link>
    );
  }

  return (
    <p
      className={[
        styles[color],
        styles[type],
        hasMargin ? styles.hasMargin : styles.noMargin,
      ].join(' ')}
    >
      {text}
    </p>
  );
};

export default Typography;
