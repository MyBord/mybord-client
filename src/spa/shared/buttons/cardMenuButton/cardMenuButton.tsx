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
  const handleCallback = (props: PopOverCallback): void => {
    // console.log(props.showPopOver);
  };

  return (
    <PopOver Content={<CardMenuButtonContent cardId={userCard.id} />} callback={handleCallback}>
      <div className={[styles.div, 'card-menu-button'].join(' ')}>
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
      </div>
    </PopOver>
  );
};

export default CardMenuButton;
