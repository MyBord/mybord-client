import * as React from 'react';
import { Link } from 'react-router-dom';
import Typography from 'typography/typography';
import * as styles from './header.module.scss';

const Header: React.FC = () => (
  <header className={styles.header}>
    <div className={styles.div}>
      <Link to="/dashboard">
        <Typography
          color="lightGrey"
          size="large"
          text="MyBord"
        />
      </Link>
      <Typography
        color="lightGrey"
        size="large"
        text="Trending"
      />
      <Typography
        color="lightGrey"
        size="large"
        text="Following"
      />
    </div>
  </header>
);

export default Header;
