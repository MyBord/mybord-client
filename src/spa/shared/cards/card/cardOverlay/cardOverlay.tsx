import * as React from 'react';
import { useCardContext } from 'context/cardContext/cardContext';
import * as styles from './cardOverlay.module.less';

interface Props {
  cardId: string;
}

const CardOverlay: React.FC<Props> = ({ cardId }) => {
  const { canMultiEdit, toggleCard } = useCardContext();

  const handleClick = (): void => toggleCard(cardId);

  if (canMultiEdit) {
    return (
      <div
        aria-hidden="true"
        aria-label="card-button"
        className={styles.div}
        onClick={handleClick}
        role="button"
        tabIndex={0}
      />
    );
  }

  return null;
};

export default CardOverlay;
