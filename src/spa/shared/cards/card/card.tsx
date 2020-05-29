import * as React from 'react';
import CardMenuButton from 'buttons/cardMenuButton/cardMenuButton';
import Icon from 'icons/icon/icon';
import LikeButton from 'buttons/likeButton/likeButton';
import { useCardContext } from 'context/cardContext';
import * as styles from './card.module.less';

// This card component is the parent component that wraps every is the unique card type to make
// sure that every card, regardless of type, has the same consistent styling and functionality.

interface Props {
  Content: React.FC; // Main content of the card
  Description: React.FC; // Description portion of the card
  id: string;
}

const Card: React.FC<Props> = ({
  Content,
  Description,
  id,
}) => {
  const { canEdit, selectedCards, toggleCard } = useCardContext();
  const [isLiked, setIsLiked] = React.useState<boolean>(false);

  const handleClick = (): void => toggleCard(id);

  const isSelected = selectedCards.includes(id);

  return (
    <div
      className={[
        styles.container,
        isSelected ? styles.selectedContainer : undefined,
      ].join(' ')}
    >
      <div className={styles.contentButtons}>
        <LikeButton
          isLiked={isLiked}
          onClick={() => setIsLiked((prevState) => !prevState)}
          size={25}
        />
        <CardMenuButton onClick={() => console.log('foo')} />
      </div>
      {
        canEdit && (
          <div
            aria-hidden="true"
            aria-label="card-button"
            className={styles.overlayDiv}
            onClick={handleClick}
            role="button"
            tabIndex={0}
          />
        )
      }
      <Content />
      <Description />
      <div className={styles.actionContainer}>
        <hr className={styles.hr} />
        <div>
          <Icon iconName="heart" size={16} />
          <Icon iconName="star" size={16} />
        </div>
      </div>
    </div>
  );
};

export default Card;
