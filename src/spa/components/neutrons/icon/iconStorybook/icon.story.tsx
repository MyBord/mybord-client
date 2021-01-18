import * as React from 'react';
import Typography from 'typography/typography';
import Icon, { IconNames, iconNames } from '../icon';
import * as styles from './icon.story.module.less';

interface Props {
  iconName: IconNames;
}

const IconItem: React.FC<Props> = ({ iconName }) => (
  <div className={styles.iconItemContainer}>
    <Icon iconName={iconName} size={32} />
    <Typography text={iconName} type="h5" />
  </div>
);

const IconStory: React.FC = () => (
  <>
    <Typography text="List of Icons" type="h1" />
    <div className={styles.iconsContainer}>
      {
        Object.keys(iconNames).map((iconName: IconNames, index) => (
          <IconItem key={`${iconName}-${index}`} iconName={iconName} />
        ))
      }
    </div>
  </>
);

export default IconStory;
