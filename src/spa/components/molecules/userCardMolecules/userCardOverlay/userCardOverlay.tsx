import * as React from 'react';
import { useMultiSelectCardContext } from 'context/multiSelectCardContext/multiSelectCardContext';
import * as styles from './userCardOverlay.module.less';

interface Props {
  cardId: string;
}

const UserCardOverlay: React.FC<Props> = ({ cardId }) => {
  const { canMultiEdit, toggleCard } = useMultiSelectCardContext();

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

export default UserCardOverlay;
