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
  const { canEdit } = useCardContext();

  return (
    <div className={styles.container}>
      <div className={styles.buttonsContainer}>
        {
          !canEdit && (
            <>
              <LikeButton
                isLiked={isLiked}
                onClick={setIsLiked}
                size={25}
              />
              <CardMenuButton />
            </>
          )
        }
      </div>
      <Content />
    </div>
  );
};

export default CardContent;
