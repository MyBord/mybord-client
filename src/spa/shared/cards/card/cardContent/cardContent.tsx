import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import CardContentButtonsAnimation from 'framerMotion/cardContentButtonsAnimation';
import CardMenuButton from 'buttons/cardMenuButton/cardMenuButton';
import FavoriteButton from 'buttons/favoriteButton/favoriteButton';
import { TOGGLE_CARD_FILTER } from 'context/dashboardCardsContext/dashboardCardsReducerTypes';
import { TOGGLE_FAVORITE_USER_CARD_MUTATION, UserCard } from 'schema/card';
import { useDashboardCardsContext } from 'context/dashboardCardsContext/dashboardCardsContext';
import { useMultiSelectCardContext } from 'context/multiSelectCardContext/multiSelectCardContext';
import * as styles from './cardContent.module.less';

interface Props {
  Content: React.FC;
  isPreview: boolean;
  userCard: UserCard;
}

const CardContent: React.FC<Props> = ({
  Content,
  isPreview,
  userCard,
}) => {
  const [isFavorite, setIsFavorite] = React.useState<boolean>(userCard.isFavorite);
  const [toggleFavoriteUserCard] = useMutation(TOGGLE_FAVORITE_USER_CARD_MUTATION);
  const { activeCard, canMultiEdit } = useMultiSelectCardContext();
  const { dispatch } = useDashboardCardsContext();

  const handleFavorite = async (): Promise<void> => {
    setIsFavorite((prevState) => !prevState);
    dispatch({ type: TOGGLE_CARD_FILTER, filter: 'favorite', id: userCard.id });
    await toggleFavoriteUserCard({
      variables: {
        cardId: userCard.id,
      },
    });
  };

  const showButtons = !canMultiEdit && activeCard.id !== userCard.id;

  return (
    <div className={styles.container}>
      {
        !isPreview && (
          <CardContentButtonsAnimation showButtons={showButtons}>
            <FavoriteButton
              isFavorite={isFavorite}
              onClick={handleFavorite}
              size={25}
            />
            <CardMenuButton userCard={userCard} />
          </CardContentButtonsAnimation>
        )
      }
      <Content />
    </div>
  );
};

export default CardContent;
