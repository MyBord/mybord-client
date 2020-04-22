import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './typography.module.less';

interface Props {
  color?: 'black' | 'blue' | 'lightGrey' | 'transparentWhite' | 'white';
  font?: 'poppins' | 'roboto';
  link?: string;
  maxTextLength?: number;
  onClick?: () => void;
  showExpandCollapseButton?: boolean;
  size?: 'large' | 'medium' | 'normal' | 'small' | 'xl';
  text: string;
  weight?: 'bold' | 'light' | 'regular';
}

const Typography: React.FC<Props> = ({
  color = 'black',
  font = 'poppins',
  link = null,
  maxTextLength = null,
  onClick = null,
  size = 'normal',
  text,
  weight = 'regular',
}) => {
  const renderText = (): string => {
    if (maxTextLength && text.length > maxTextLength) {
      return (
        `${text.slice(0, maxTextLength)}...`
      );
    }
    return text;
  };

  if (link) {
    return (
      <Link
        className={[
          styles.typography,
          styles[font],
          styles[size],
          styles[weight],
        ].join(' ')}
        to={link}
      >
        {renderText()}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button
        className={[
          styles.button,
          styles.typography,
          styles[font],
          styles[size],
          styles[weight],
        ].join(' ')}
        type="button"
        onClick={onClick}
      >
        {renderText()}
      </button>
    );
  }

  return (
    <p
      className={[
        styles.typography,
        styles[color],
        styles[font],
        styles[size],
        styles[weight],
      ].join(' ')}
    >
      {renderText()}
    </p>
  );
};

export default Typography;
