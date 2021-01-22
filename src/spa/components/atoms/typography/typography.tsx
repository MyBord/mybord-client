import * as React from 'react';
import { Link } from 'react-router-dom';
import Tooltip from 'molecules/tooltip/tooltip';
import * as styles from './typography.module.less';

interface Props {
  className?: string;
  color?: 'black' | 'white';
  hasMargin?: boolean;
  link?: string;
  maxTextLength?: number;
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
  className = null,
  color = 'black',
  hasMargin = true,
  link = null,
  maxTextLength = null,
  text,
  type,
}) => {
  const pClassName = [
    styles[color],
    styles[type],
    hasMargin ? styles.hasMargin : styles.noMargin,
    className || undefined,
  ].join(' ');

  if (link && type === 'linkDefault') {
    return (
      <Link
        className={[
          styles[type],
          className || undefined,
        ].join(' ')}
        to={link}
      >
        {text}
      </Link>
    );
  }

  if (maxTextLength && text && text.length > maxTextLength) {
    return (
      <p className={pClassName}>
        {text.slice(0, maxTextLength).trim()}
        <Tooltip text={text} trigger="click">
          <div className={[styles.ellipsis].join(' ')}>
            <div className={styles.dot} />
            <div className={styles.dot} />
            <div className={styles.dot} />
          </div>
        </Tooltip>
      </p>
    );
  }

  return (
    <p className={pClassName}>
      {text}
    </p>
  );
};

export default Typography;
