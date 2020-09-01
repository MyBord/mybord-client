import * as React from 'react';
import { UserCard } from 'schema/card';
import { useMultiSelectCardContext } from 'context/multiSelectCardContext/multiSelectCardContext';
import CardContent from './cardContent/cardContent';
import CardDescription from './cardDescription/cardDescription';
// import CardFooter from './cardFooter/cardFooter';
import CardOverlay from './cardOverlay/cardOverlay';
import memoCard from './memoCard';
import * as styles from './card.module.less';

// This card component is the parent component that wraps every is the unique card type to make
// sure that every card, regardless of type, has the same consistent styling and functionality.

export interface Props {
  isPreview?: boolean;
  userCard: UserCard;
}

const Card: React.FC<Props> = ({
  isPreview = false,
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
      <CardContent
        isPreview={isPreview}
        userCard={userCard}
      />
      <CardDescription
        userCard={userCard}
      />
      {/* <CardFooter /> */}
    </div>
  );
};

export default memoCard(Card);
