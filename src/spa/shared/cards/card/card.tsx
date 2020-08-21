import * as React from 'react';
import { UserCard } from 'schema/card';
import { useMultiSelectCardContext } from 'context/multiSelectCardContext/multiSelectCardContext';
import CardButtons from './cardButtons/cardButtons';
// import CardFooter from './cardFooter/cardFooter';
import CardOverlay from './cardOverlay/cardOverlay';
import memoCard from './memoCard';
import * as styles from './card.module.less';

// This card component is the parent component that wraps every is the unique card type to make
// sure that every card, regardless of type, has the same consistent styling and functionality.

export interface Props {
  children: React.ReactNode;
  isPreview: boolean;
  userCard: UserCard;
}

const Card: React.FC<Props> = ({
  children,
  isPreview,
  userCard,
}) => {
  const { selectedCardIds } = useMultiSelectCardContext();
  const isSelected = selectedCardIds.includes(userCard.id);

  return (
    <div
      className={[
        styles.container,
        isSelected ? styles.selectedContainer : undefined,
        isPreview ? styles.containerPreview : undefined,
      ].join(' ')}
    >
      <CardOverlay cardId={userCard.id} />
      {
        !isPreview && <CardButtons userCard={userCard} />
      }
      {children}
      {/* <CardFooter /> */}
    </div>
  );
};

export default memoCard(Card);
