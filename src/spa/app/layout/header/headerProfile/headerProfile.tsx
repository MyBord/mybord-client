import * as React from 'react';
import Icon from 'icons/icon/icon';
import PopOver from 'modals/popOver/popOver';
import { PopOverCallback } from 'types/modalTypes';
import HeaderProfileContent from './headerProfileContent';
import * as styles from './headerProfile.module.less';

const HeaderProfile: React.FC = () => {
  const [showPopOver, setShowPopOver] = React.useState(null);
  const handleCallback = (props: PopOverCallback): void => {
    console.log(props.showPopOver);
  };

  return (
    <PopOver
      Content={<HeaderProfileContent />}
      callback={handleCallback}
      placement="bottom-right"
    >
      <div className={styles.div}>
        <Icon iconName="avatar" size={40} />
      </div>
    </PopOver>
  );
};

export default HeaderProfile;
