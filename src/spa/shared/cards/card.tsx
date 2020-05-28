import * as React from 'react';
import Icon from 'icons/icon/icon';
import LikeButton from 'buttons/likeButton/likeButton';
import { useCardContext } from 'context/cardContext';
import * as styles from './card.module.less';

// This card component is the parent component that wraps every is the unique card type to make
// sure that every card, regardless of type, has the same consistent styling and functionality.

interface Props {
  children: React.ReactNode;
  id: string;
}

const Card: React.FC<Props> = ({ children, id }) => {
  const { canEdit, selectedCards, toggleCard } = useCardContext();
  const [isLiked, setIsLiked] = React.useState<boolean>(false);

  const handleClick = (): void => toggleCard(id);

  const isSelected = selectedCards.includes(id);

  return (
    <div className={styles.container}>
      <div className={styles.editDiv}>
        <div className={styles.editDot} />
        <div className={styles.editDot} />
        <div className={styles.editDot} />
      </div>
      <div className={styles.likeButtonDiv}>
        <LikeButton
          isLiked={isLiked}
          onClick={() => setIsLiked((prevState) => !prevState)}
          size={25}
        />
      </div>
      {
        canEdit && (
          <div
            aria-hidden="true"
            aria-label="card-button"
            className={[
              styles.overlayDiv,
              canEdit && isSelected ? styles.isSelected : undefined,
            ].join(' ')}
            onClick={handleClick}
            role="button"
            tabIndex={0}
          />
        )
      }
      {children}
      <div className={styles.actionContainer}>
        <hr className={styles.hr} />
        <div>
          <Icon iconName="delete" size={16} />
          <Icon iconName="pencil" size={16} />
        </div>
      </div>
    </div>
  );
};

export default Card;
