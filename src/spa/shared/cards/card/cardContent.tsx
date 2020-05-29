import * as React from 'react';
import CardMenuButton from 'buttons/cardMenuButton/cardMenuButton';
import LikeButton from 'buttons/likeButton/likeButton';
import * as styles from './card.module.less';

interface Props {
  Content: React.FC;
  isLiked: boolean;
  setIsLiked: () => void;
}

const CardContent: React.FC<Props> = ({
  Content,
  isLiked,
  setIsLiked,
}) => (
  <>
    <div className={styles.contentButtons}>
      <LikeButton
        isLiked={isLiked}
        onClick={setIsLiked}
        size={25}
      />
      <CardMenuButton onClick={() => console.log('foo')} />
    </div>
    <Content />
  </>
);

export default CardContent;
