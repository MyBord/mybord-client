import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  TypographyFont,
  TypographySize,
  TypographyTextAlign,
  TypographyWeight,
} from 'types/typographyTypes';
import * as styles from '../typography.module.less';

interface Props {
  children: React.ReactNode;
  font: TypographyFont;
  link: string;
  onClick?: () => void;
  size: TypographySize;
  textAlign?: TypographyTextAlign;
  weight: TypographyWeight;
}

const TypographyLink: React.FC<Props> = ({
  children,
  font,
  link,
  onClick,
  size,
  textAlign,
  weight,
}) => (
  <Link
    className={[
      styles.link,
      styles.typography,
      styles[font],
      styles[size],
      styles[textAlign],
      styles[weight],
    ].join(' ')}
    to={link}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default TypographyLink;
