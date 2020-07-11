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
  Content: React.FC; // Main content of the card
  Description: React.FC; // Description portion of the card
  userCard: UserCard;
}

const Card: React.FC<Props> = ({
  Content,
  Description,
  userCard,
}) => {
  const { selectedCardIds } = useMultiSelectCardContext();
  const isSelected = selectedCardIds.includes(userCard.id);

  return (
    <div
      className={[
        styles.container,
        isSelected ? styles.selectedContainer : undefined,
      ].join(' ')}
    >
      <CardOverlay cardId={userCard.id} />
      <CardContent Content={Content} userCard={userCard} />
      <CardDescription Description={Description} />
      {/* <CardFooter /> */}
    </div>
  );
};

export default memoCard(Card);
