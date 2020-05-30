import * as React from 'react';
import Icon from 'icons/icon/icon';
import Popover from 'shared/modals/popover/popover';
import HeaderProfilePopoverContent from './headerProfilePopoverContent';
import * as styles from './headerProfile.module.less';

const HeaderProfile: React.FC = () => (
  <Popover
    Content={HeaderProfilePopoverContent}
    hideTip
    overlayClassName={styles.popover}
    placement="bottomLeft"
    title="Profile Settings"
  >
    <div className={styles.div}>
      <Icon iconName="avatar" size={40} />
      <div className={styles.arrowDiv}>
        <Icon iconName="downArrow" size={10} />
      </div>
    </div>
  </Popover>
);

export default HeaderProfile;
