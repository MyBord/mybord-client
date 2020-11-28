import * as React from 'react';
import PopOver from 'popOver/popOver';
import { PopOverCallback } from 'types/modalTypes';
import { UserCardData } from 'schema/card';
import CardMenuButtonContent from './cardMenuButtonContent/cardMenuButtonContent';
import * as styles from './cardMenuButton.module.less';

interface Props {
  userCardData: UserCardData;
}

const CardMenuButton: React.FC<Props> = ({ userCardData }) => {
  const [isPopOverVisible, setIsPopOverVisible] = React.useState<boolean>(false);

  const handleCallback = (props: PopOverCallback): void => {
    setIsPopOverVisible(props.isVisible);
  };

  return (
    <PopOver
      Content={<CardMenuButtonContent cardId={userCardData.id} />}
      callback={handleCallback}
    >
      <div
        className={[styles.div, 'card-menu-button'].join(' ')}
        style={{ opacity: isPopOverVisible ? '1' : null }}
      >
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
      </div>
    </PopOver>
  );
};

export default CardMenuButton;
