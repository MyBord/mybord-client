import * as React from 'react';
import AnimatedIcon, { IconName } from 'icons/animatedIcon/animatedIcon';
import Typography from 'shared/typography/typography';
import * as styles from './navigationButton.module.scss';

interface Props {
  iconName: IconName;
  label: string;
}

const NavigationButton: React.FC<Props> = ({ iconName, label }) => {
  const [state, setState] = React.useState(true);

  return (
    <button
      className={styles.button}
      onMouseEnter={() => setState(false)}
      onClick={() => console.log('click')}
      type="button"
    >
      <div className={styles.iconDiv}>
        <AnimatedIcon
          iconName={iconName}
          isStopped={state}
          size={40}
        />
      </div>
      <Typography text={label} type="text" />
    </button>
  );
};

export default NavigationButton;
