import * as React from 'react';
import { useCardContext } from 'context/cardContext';
import * as styles from './card.module.less';

interface Props {
  cardId: string;
}

const CardOverlay: React.FC<Props> = ({ cardId }) => {
  const { canEdit, toggleCard } = useCardContext();

  const handleClick = (): void => toggleCard(cardId);

  if (canEdit) {
    return (
      <div
        aria-hidden="true"
        aria-label="card-button"
        className={styles.overlayDiv}
        onClick={handleClick}
        role="button"
        tabIndex={0}
      />
    );
  }

  return null;
};

export default CardOverlay;
