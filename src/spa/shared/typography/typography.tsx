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
  Content?: React.FC;
  color?: TypographyColor;
  font?: TypographyFont;
  link?: string;
  maxTextLength?: number;
  onClick?: () => void;
  showExpandCollapseButton?: boolean;
  size?: TypographySize;
  text: string;
  weight?: TypographyWeight;
}

const Typography: React.FC<Props> = ({
  Content = null,
  color = 'black',
  font = 'poppins',
  link = null,
  maxTextLength = null,
  onClick = null,
  size = 'normal',
  text,
  weight = 'regular',
}) => {
  const renderTypographyText = (): React.ReactElement => (
    <TypographyText
      Content={Content}
      maxTextLength={maxTextLength}
      text={text}
    />
  );

  if (link) {
    return (
      <Link
        className={[
          styles.link,
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
