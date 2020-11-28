import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import CardContentButtonsAnimation from 'animations/cardContentButtonsAnimation';
import CardMenuButton from 'buttons/cardMenuButton/cardMenuButton';
import FavoriteButton from 'buttons/favoriteButton/favoriteButton';
import { TOGGLE_CARD_FILTER } from 'context/userDashboardContext/userDashboardReducerTypes';
import { TOGGLE_FAVORITE_USER_CARD_MUTATION, UserCardData } from 'schema/card';
import { useUserDashboardContext } from 'context/userDashboardContext/userDashboardContext';
import { useMultiSelectCardContext } from 'context/multiSelectCardContext/multiSelectCardContext';
import * as styles from './userCardContent.module.less';

interface Props {
  children: React.ReactElement;
  isPreview: boolean;
  userCardData: UserCardData;
}

const UserCardContent: React.FC<Props> = ({
  children,
  isPreview,
  userCardData,
}) => {
  const [isFavorite, setIsFavorite] = React.useState<boolean>(userCardData.isFavorite);
  const [toggleFavoriteUserCard] = useMutation(TOGGLE_FAVORITE_USER_CARD_MUTATION);
  const { activeCard, canMultiEdit } = useMultiSelectCardContext();
  const { dispatch } = useUserDashboardContext();

  const handleFavorite = async (): Promise<void> => {
    setIsFavorite((prevState) => !prevState);
    dispatch({ type: TOGGLE_CARD_FILTER, filter: 'favorite', id: userCardData.id });
    await toggleFavoriteUserCard({
      variables: {
        cardId: userCardData.id,
      },
    });
  };

  const showButtons = !canMultiEdit && activeCard.id !== userCardData.id;

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
            <CardMenuButton userCardData={userCardData} />
          </CardContentButtonsAnimation>
        )
      }
      {children}
    </div>
  );
};

export default UserCardContent;
