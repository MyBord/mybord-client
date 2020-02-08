import * as React from 'react';
import * as styles from 'storybook/storybook.module.less';
import { IconNames } from 'types/iconTypes';
import Icon, { iconNames } from './icon';

const IconDemo: React.FC = () => (
  <div className={styles.examplesDivGroup}>
    {
      Object.keys(iconNames).map((iconName: IconNames) => (
        <div className={styles.exampleDiv}>
          <div className={styles.exampleDivCenter}>
            <Icon iconName={iconName} size={60} />
          </div>
          <p className={styles.exampleP}>{iconName.charAt(0).toUpperCase() + iconName.slice(1)}</p>
        </div>
      ))
    }
  </div>
);

export default IconDemo;
