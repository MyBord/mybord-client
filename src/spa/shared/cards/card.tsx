import * as React from 'react';
import Icon from 'icons/icon/icon';
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

  const handleClick = (): void => toggleCard(id);

  const isSelected = selectedCards.includes(id);

  return (
    <div
      className={[
        styles.container,
        canEdit && isSelected ? styles.isSelected : undefined,
      ].join(' ')}
    >
      {
        canEdit && (
          <div
            aria-hidden="true"
            aria-label="card-button"
            className={[
              styles.overlayDiv,
            ].join(' ')}
            onClick={handleClick}
            role="button"
            tabIndex={0}
          />
        )
      }
      {children}
    </div>
  );
};

export default Card;
