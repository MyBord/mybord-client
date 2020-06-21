import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  TypographyFont,
  TypographySize,
  TypographyWeight,
} from 'types/typographyTypes';
import * as styles from './typography.module.less';

interface Props {
  children: React.ReactNode;
  font: TypographyFont;
  link: string;
  size: TypographySize;
  weight: TypographyWeight;
}

const TypographyLink: React.FC<Props> = ({
  children,
  font,
  link,
  size,
  weight,
}) => (
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
    {children}
  </Link>
);

export default TypographyLink;
