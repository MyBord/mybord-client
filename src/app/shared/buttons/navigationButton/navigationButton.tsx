import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import AnimatedIcon from 'icons/animatedIcon/animatedIcon';
import Typography from 'shared/typography/typography';
import { AnimatedIconNames } from 'types/iconTypes';
import * as styles from './navigationButton.module.scss';

interface Props {
  iconName: AnimatedIconNames;
  label: string;
  to: string;
}

const NavigationButton: React.FC<Props> = ({ iconName, label, to }) => {
  const [state, setState] = React.useState(true);
  const location = useLocation();

  return (
    <Link
      className={styles.link}
      onMouseEnter={() => setState(false)}
      to={`/${to}`}
    >
      {location.pathname === `/${to}` && <span className={styles.span} />}
      <div className={styles.iconDiv}>
        <AnimatedIcon
          iconName={iconName}
          isStopped={state}
          size={40}
        />
      </div>
      <Typography text={label} type="text" />
    </Link>
  );
};

export default NavigationButton;
