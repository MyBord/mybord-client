import * as React from 'react';
import { Link } from 'react-router-dom';
import AnimatedIcon from 'icons/animatedIcon/animatedIcon';
import Typography from 'shared/typography/typography';
import { AnimatedIconNames } from 'types/iconTypes';
import * as styles from './navigationButton.module.scss';

interface Props {
  active?: boolean;
  iconName: AnimatedIconNames;
  label: string;
  to: string;
}

const NavigationButton: React.FC<Props> = ({ active = false, iconName, label, to }) => {
  const [state, setState] = React.useState(true);

  return (
    <Link
      className={styles.link}
      onMouseEnter={() => setState(false)}
      to={`/${to}`}
    >
      {active && <span className={styles.span} />}
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
