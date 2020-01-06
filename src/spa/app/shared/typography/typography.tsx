import * as React from 'react';
import * as styles from './typography.module.less';

interface Props {
  color?: 'black' | 'lightGrey' | 'transparentWhite' | 'white';
  font?: 'poppins' | 'roboto';
  maxTextLength?: number;
  showExpandCollapseButton?: boolean;
  size?: 'large' | 'medium' | 'normal' | 'small';
  text: string;
  weight?: 'bold' | 'light' | 'regular';
}

const Typography: React.FC<Props> = ({
  color = 'black',
  font = 'poppins',
  maxTextLength = null,
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
