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
  dynamicWidth?: boolean;
  isPreview: boolean;
  userCard: UserCard;
}

const Card: React.FC<Props> = ({
  children,
  dynamicWidth = false,
  isPreview,
  userCard,
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { selectedCardIds } = useMultiSelectCardContext();
  const isSelected = selectedCardIds.includes(userCard.id);
  const bar = (): void => console.log(containerRef.current.getBoundingClientRect());

  React.useEffect(() => {
    if (containerRef.current) {
      if (dynamicWidth) {
        console.log('foo');
      }
      console.log(containerRef.current.getBoundingClientRect());
    }
  }, [containerRef]);

  return (
    <div
      className={[
        styles.container,
        !dynamicWidth ? styles.standardWidthContainer : undefined,
        isSelected ? styles.selectedContainer : undefined,
        isPreview ? styles.containerPreview : undefined,
      ].join(' ')}
      ref={containerRef}
    >
      <button type="button" onClick={bar} style={{ position: 'absolute', zIndex: 1 }}>foo</button>
      <CardOverlay cardId={userCard.id} />
      {/* { */}
      {/*  !isPreview && <CardButtons userCard={userCard} /> */}
      {/* } */}
      {children}
      {/* <CardFooter /> */}
    </div>
  );
};

export default memoCard(Card);
