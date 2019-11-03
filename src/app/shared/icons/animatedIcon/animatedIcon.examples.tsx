import * as React from 'react';
import * as styles from 'storybook/storybook.module.scss';
import useToggle from 'hooks/useToggle';
import AnimatedIcon, { icons, IconName } from './animatedIcon';

const AnimatedIconExamples: React.FC = () => {
  const [state, setState] = useToggle(true);
  return (
    <>
      <button className={styles.exampleButton} onClick={setState} type="button">Animate</button>
      <div className={styles.examplesDivGroup}>
        {
          Object.keys(icons).map((iconName: IconName) => (
            <div className={styles.exampleDiv}>
              <div className={styles.exampleDivCenter}>
                <AnimatedIcon
                  iconName={iconName}
                  isStopped={state}
                  size={60}
                />
              </div>
              <p className={styles.exampleP}>
                {iconName.charAt(0).toUpperCase() + iconName.slice(1)}
              </p>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default AnimatedIconExamples;
