import * as React from 'react';
import { Link } from 'react-router-dom';
import { IconNames } from 'types/iconNameTypes';
import {
  TypographyColor,
  TypographyFont,
  TypographySize,
  TypographyWeight,
} from 'types/typographyTypes';
import TypographyText from './typographyText';
import * as styles from './typography.module.less';

interface Props {
  color?: TypographyColor;
  font?: TypographyFont;
  iconName?: IconNames;
  link?: string;
  maxTextLength?: number;
  onClick?: () => void;
  showExpandCollapseButton?: boolean;
  size?: TypographySize;
  text: string;
  weight?: TypographyWeight;
}

const Typography: React.FC<Props> = ({
  color = 'black',
  font = 'poppins',
  iconName = null,
  link = null,
  maxTextLength = null,
  onClick = null,
  size = 'normal',
  text,
  weight = 'regular',
}) => {
  const renderTypographyText = (): React.ReactElement => (
    <TypographyText
      color={link || onClick ? 'blue' : color}
      iconName={iconName}
      maxTextLength={maxTextLength}
      size={size}
      text={text}
    />
  );

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
        {renderTypographyText()}
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
        {renderTypographyText()}
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
      {renderTypographyText()}
    </p>
  );
};

export default Typography;
