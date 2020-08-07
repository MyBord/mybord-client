import * as React from 'react';
import { Link } from 'react-router-dom';
import { TypographyProps } from 'types/typographyTypes';
import * as styles from '../typography.module.less';

interface Props {
  children: React.ReactNode;
  color: TypographyProps['color'];
  commonStyles: string;
  link: TypographyProps['link'];
  onClick?: TypographyProps['onClick'];
}

const TypographyLink: React.FC<Props> = ({
  children,
  color,
  commonStyles,
  link,
  onClick,
}) => {
  const linkStyles = [
    styles.link,
    color === 'white' ? styles.whiteButtonLink : undefined,
    commonStyles,
  ].join(' ');
  const isAnchor = link.startsWith('https') || link.startsWith('mailto');
  const isMailTo = link.startsWith('mailto');

  if (isAnchor) {
    return (
      <a
        className={linkStyles}
        href={link}
        onClick={onClick}
        rel={isMailTo ? undefined : 'noopener noreferrer'}
        target={isMailTo ? undefined : 'blank'}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      className={linkStyles}
      to={link}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default TypographyLink;
