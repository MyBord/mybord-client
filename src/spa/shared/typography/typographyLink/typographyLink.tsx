import * as React from 'react';
import { Link } from 'react-router-dom';
import { TypographyProps } from 'types/typographyTypes';
import * as styles from '../typography.module.less';

interface Props {
  children: React.ReactNode;
  commonStyles: string;
  link: TypographyProps['link'];
  onClick?: TypographyProps['onClick'];
}

const TypographyLink: React.FC<Props> = ({
  children,
  commonStyles,
  link,
  onClick,
}) => (
  <Link
    className={[styles.link, commonStyles].join(' ')}
    to={link}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default TypographyLink;
