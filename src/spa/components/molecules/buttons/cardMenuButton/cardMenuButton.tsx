import * as React from 'react';
import PopOver from 'modals/popOver/popOver';
import { PopOverCallback } from 'types/modalTypes';
import { UserCard } from 'schema/card';
import CardMenuButtonContent from './cardMenuButtonContent/cardMenuButtonContent';
import * as styles from './cardMenuButton.module.less';

interface Props {
  userCard: UserCard;
}

const CardMenuButton: React.FC<Props> = ({ userCard }) => {
  const [isPopOverVisible, setIsPopOverVisible] = React.useState<boolean>(false);

  const handleCallback = (props: PopOverCallback): void => {
    setIsPopOverVisible(props.isVisible);
  };

  return (
    <PopOver Content={<CardMenuButtonContent cardId={userCard.id} />} callback={handleCallback}>
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
