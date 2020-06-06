import * as React from 'react';
import CardMenuButton from 'buttons/cardMenuButton/cardMenuButton';
import LikeButton from 'buttons/likeButton/likeButton';
import { useCardContext } from 'context/cardContext';
import * as styles from './cardContent.module.less';

interface Props {
  Content: React.FC;
  isLiked: boolean;
  setIsLiked: () => void;
}

const CardContent: React.FC<Props> = ({
  Content,
  isLiked,
  setIsLiked,
}) => {
  const containerRef = React.useRef(null);
  const { canMultiEdit } = useCardContext();

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.buttonsContainer}>
        {
          !canMultiEdit && (
            <>
              <LikeButton
                isLiked={isLiked}
                onClick={setIsLiked}
                size={25}
              />
              <CardMenuButton containerRef={containerRef} />
            </>
          )
        }
      </div>
      <Content />
    </div>
  );
};

export default CardContent;
