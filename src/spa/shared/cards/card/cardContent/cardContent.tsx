import * as React from 'react';
import CardContentButtonsAnimation from 'framerMotion/cardContentButtonsAnimation';
import CardMenuButton from 'buttons/cardMenuButton/cardMenuButton';
import LikeButton from 'buttons/likeButton/likeButton';
import { useCardContext } from 'context/cardContext';
import * as styles from './cardContent.module.less';

interface Props {
  Content: React.FC;
  cardId: string;
  isLiked: boolean;
  setIsLiked: () => void;
}

const CardContent: React.FC<Props> = ({
  Content,
  cardId,
  isLiked,
  setIsLiked,
}) => {
  const containerRef = React.useRef(null);
  const { activeCard, canMultiEdit } = useCardContext();

  const showButtons = !canMultiEdit && activeCard.id !== cardId;

  return (
    <div className={styles.container} ref={containerRef}>
      <CardContentButtonsAnimation showButtons={showButtons}>
        <LikeButton
          isLiked={isLiked}
          onClick={setIsLiked}
          size={25}
        />
        <CardMenuButton containerRef={containerRef} />
      </CardContentButtonsAnimation>
      <Content />
    </div>
  );
};

export default CardContent;
