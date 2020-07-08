import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import CardContentButtonsAnimation from 'framerMotion/cardContentButtonsAnimation';
import CardMenuButton from 'buttons/cardMenuButton/cardMenuButton';
import FavoriteButton from 'buttons/favoriteButton/favoriteButton';
import { TOGGLE_FAVORITE_USER_CARD_MUTATION, UserCard } from 'schema/card';
import { useMultiSelectCardContext } from 'context/multiSelectCardContext/multiSelectCardContext';
import * as styles from './cardContent.module.less';

interface Props {
  Content: React.FC;
  userCard: UserCard;
}

const CardContent: React.FC<Props> = ({
  Content,
  userCard,
}) => {
  const [isFavorite, setIsFavorite] = React.useState<boolean>(userCard.isFavorite);
  const { activeCard, canMultiEdit } = useMultiSelectCardContext();
  const [toggleFavoriteUserCard] = useMutation(TOGGLE_FAVORITE_USER_CARD_MUTATION);

  const handleFavorite = async (): Promise<void> => {
    setIsFavorite((prevState) => !prevState);
    await toggleFavoriteUserCard({
      variables: {
        cardId: userCard.id,
      },
    });
  };

  const showButtons = !canMultiEdit && activeCard.id !== userCard.id;

  return (
    <div className={styles.container}>
      <CardContentButtonsAnimation showButtons={showButtons}>
        <FavoriteButton
          isFavorite={isFavorite}
          onClick={handleFavorite}
          size={25}
        />
        <CardMenuButton userCard={userCard} />
      </CardContentButtonsAnimation>
      <Content />
    </div>
  );
};

export default CardContent;
