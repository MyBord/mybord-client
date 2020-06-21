import * as React from 'react';
import CardContentButtonsAnimation from 'framerMotion/cardContentButtonsAnimation';
import CardMenuButtonContainer from 'buttons/cardMenuButton/cardMenuButtonContainer';
import LikeButton from 'buttons/likeButton/likeButton';
import { UserCard } from 'schema/card';
import { useCardContext } from 'context/cardContext';
import * as styles from './cardContent.module.less';

interface Props {
  Content: React.FC;
  userCard: UserCard;
}

const CardContent: React.FC<Props> = ({
  Content,
  userCard,
}) => {
  const containerRef = React.useRef(null);
  const { activeCard, canMultiEdit } = useCardContext();

  const showButtons = !canMultiEdit && activeCard.id !== userCard.id;

  return (
    <div className={styles.container} ref={containerRef}>
      <CardContentButtonsAnimation showButtons={showButtons}>
        <LikeButton
          isLiked={userCard.isFavorite}
          onClick={() => console.log('foo')}
          size={25}
        />
        <CardMenuButtonContainer cardId={userCard.id} containerRef={containerRef} />
      </CardContentButtonsAnimation>
      <Content />
    </div>
  );
};

export default CardContent;
