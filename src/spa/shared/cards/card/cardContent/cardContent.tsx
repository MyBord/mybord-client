import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import CardContentButtonsAnimation from 'framerMotion/cardContentButtonsAnimation';
import CardMenuButtonContainer from 'buttons/cardMenuButton/cardMenuButtonContainer';
import FavoriteButton from 'buttons/favoriteButton/favoriteButton';
import { TOGGLE_FAVORITE_USER_CARD, UserCard } from 'schema/card';
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
  const [isFavorite, setIsFavorite] = React.useState<boolean>(userCard.isFavorite);
  const { activeCard, canMultiEdit } = useCardContext();
  const [toggleFavoriteUserCard] = useMutation(TOGGLE_FAVORITE_USER_CARD);

  const handleFavorite = async (): Promise<void> => {
    await toggleFavoriteUserCard({
      variables: {
        cardId: userCard.id,
      },
    });
    setIsFavorite((prevState) => !prevState);
  };

  const showButtons = !canMultiEdit && activeCard.id !== userCard.id;

  return (
    <div className={styles.container} ref={containerRef}>
      <CardContentButtonsAnimation showButtons={showButtons}>
        <FavoriteButton
          isFavorite={isFavorite}
          onClick={handleFavorite}
          size={25}
        />
        <CardMenuButtonContainer containerRef={containerRef} userCard={userCard} />
      </CardContentButtonsAnimation>
      <Content />
    </div>
  );
};

export default CardContent;
