import * as React from 'react';
import { UserCard } from 'schema/card';
import { useMultiSelectCardContext } from 'context/multiSelectCardContext/multiSelectCardContext';
import CardContent from 'card/cardContent/cardContent';
import CardDescription from 'card/cardDescription/cardDescription';
// import CardFooter from 'card/cardFooter/cardFooter';
import CardOverlay from 'card/cardOverlay/cardOverlay';
import * as styles from './card.module.less';

// This card component is the parent component that wraps every is the unique card type to make
// sure that every card, regardless of type, has the same consistent styling and functionality.

export interface Props {
  Content: React.ReactElement;
  Description: React.ReactElement;
  isPreview?: boolean;
  userCard: UserCard;
}

const Card: React.FC<Props> = ({
  Content,
  Description,
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
      >
        {Content}
      </CardContent>
      <CardDescription
        isPreview={isPreview}
        userCard={userCard}
      >
        {Description}
      </CardDescription>
      {/* <CardFooter /> */}
    </div>
  );
};

export default Card;
