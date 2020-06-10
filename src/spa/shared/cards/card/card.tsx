import * as React from 'react';
import { useCardContext } from 'context/cardContext';
import CardContent from './cardContent/cardContent';
import CardDescription from './cardDescription/cardDescription';
// import CardFooter from './cardFooter/cardFooter';
import CardOverlay from './cardOverlay/cardOverlay';
import * as styles from './card.module.less';

// This card component is the parent component that wraps every is the unique card type to make
// sure that every card, regardless of type, has the same consistent styling and functionality.

interface Props {
  Content: React.FC; // Main content of the card
  Description: React.FC; // Description portion of the card
  cardId: string;
}

const Card: React.FC<Props> = ({
  Content,
  Description,
  cardId,
}) => {
  const { selectedCardIds } = useCardContext();
  const [isLiked, setIsLiked] = React.useState<boolean>(false);

  const isSelected = selectedCardIds.includes(cardId);

  return (
    <div
      className={[
        styles.container,
        isSelected ? styles.selectedContainer : undefined,
      ].join(' ')}
    >
      <CardOverlay cardId={cardId} />
      <CardContent
        Content={Content}
        cardId={cardId}
        isLiked={isLiked}
        setIsLiked={() => setIsLiked((prevState) => !prevState)}
      />
      <CardDescription Description={Description} />
      {/* <CardFooter /> */}
    </div>
  );
};

export default Card;
