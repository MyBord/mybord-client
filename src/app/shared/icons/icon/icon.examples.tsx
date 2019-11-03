import * as React from 'react';
import * as styles from 'storybook/storybook.module.scss';
import Icon, { icons, IconName } from './icon';

const IconExamples: React.FC = () => (
  <div className={styles.examplesDivGroup}>
    {
      Object.keys(icons).map((iconName: IconName) => (
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

export default IconExamples;
