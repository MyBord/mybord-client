import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Typography from 'typography/typography';
import * as styles from './headerTitleButton.module.scss';

interface Props {
  label: string;
  link: string;
}

const HeaderTitleButton: React.FC<Props> = ({ label, link }) => {
  const location = useLocation();
  return (
    <Link
      className={[
        styles.link,
        `/${link}` === location.pathname ? styles.activeLink : undefined,
      ].join(' ')}
      to={`/${link}`}
    >
      <Typography
        color="lightGrey"
        size="large"
        text={label}
      />
    </Link>
  );
};

export default HeaderTitleButton;
